package com.global66.iterable;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;

import androidx.core.app.NotificationManagerCompat;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
import com.iterable.iterableapi.IterableFirebaseMessagingService;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import android.util.Log;

import com.iterable.iterableapi.IterableApi;

public class Global66IterableMessage {

    static String TAG = "Global66IterableMessage";

    public interface Callback<T> {
        void onSuccess(T result);

        void onError(Object error);
    }

    private static RemoteMessage getNewRemote(RemoteMessage rm) {
        Bundle bundle = rm.toIntent().getExtras();
        if (rm.getNotification() != null) {
            bundle.putString("body", rm.getNotification().getBody());
        }
        RemoteMessage remoteMessage = new RemoteMessage(bundle);

        return remoteMessage;
    }

    public static class Service extends FirebaseMessagingService {


        @Override
        public void onMessageReceived(RemoteMessage remoteMessage) {
            RemoteMessage rm = getNewRemote(remoteMessage);

            IterableFirebaseMessagingService.handleMessageReceived(getApplicationContext(), rm);
            JSONObject message = remoteMessageToJson(remoteMessage);

            if (onMessageListener != null) {
                onMessageListener.onSuccess(message.toString());
            }

            String messageId = "";
            try {
                String itblValue = rm.getData().get("itbl");
                JSONObject itbl = new JSONObject(itblValue != null ? itblValue : "{}");
                messageId = itbl.getString("messageId");
            } catch (Exception e) {
            }

            if (messageId == null) {
                return;
            }

            if (messageId != null) {
                remoteMessageMap.put(messageId, remoteMessage);
            } else if (preferences != null) {
                String savedMessage = preferences.getString(messageId, "");
                String messageString = message.toString();
                if (savedMessage.isEmpty()) {
                    preferences.edit().putString(messageId, messageString).apply();
                }
            }

        }

        @Override
        public void onNewToken(String token) {
            IterableFirebaseMessagingService.handleTokenRefresh();
            if (onTokenListener != null) {
                onTokenListener.onSuccess(token);
            }
        }
    }

    public static class MessagingReceiver extends BroadcastReceiver {
        @Override
        public void onReceive(Context context, Intent intent) {
            if (applicationContext == null) {
                init(context);
            }

            if (intent.getExtras() != null) {
                RemoteMessage remoteMessage = getNewRemote(new RemoteMessage(intent.getExtras()));

                if (remoteMessage.getNotification() != null) {
                    abortBroadcast();
                    String messageId = "";
                    try {
                        JSONObject itbl = new JSONObject(remoteMessage.getData().get("itbl"));
                        messageId = itbl.getString("messageId");

                    } catch (Exception e) {
                    }


                    IterableFirebaseMessagingService.handleMessageReceived(applicationContext, remoteMessage);
                    if (messageId != null) {
                        remoteMessageMap.put(messageId, remoteMessage);
                        SharedPreferences preferences = context.getSharedPreferences(PREFERENCES_FILE, Context.MODE_PRIVATE);
                        if (preferences != null) {
                            preferences.edit().putString(messageId, remoteMessageToJson(remoteMessage).toString()).apply();
                        }
                    }

                    if (onMessageListener != null) {
                        JSONObject message = remoteMessageToJson(remoteMessage);
                        onMessageListener.onSuccess(message.toString());
                    }

                }
            }
        }
    }

    private static final String PREFERENCES_FILE = "com.global66.iterable.message";

    private static Context applicationContext;
    private static Callback<String> onTokenListener;
    private static Callback<String> onMessageListener;
    private static Callback<String> onMessageTapListener;
    private static SharedPreferences preferences;
    private static Map<String, RemoteMessage> remoteMessageMap = new HashMap<>();

    private static JSONObject remoteMessageToJson(RemoteMessage remoteMessage) {
        JSONObject message = new JSONObject();

        try {
            message.put("collapseKey", remoteMessage.getCollapseKey());

            JSONObject data = new JSONObject();
            for (Map.Entry<String, String> entry : remoteMessage.getData().entrySet()) {
                data.put(entry.getKey(), entry.getValue());
            }
            message.put("data", data);

            message.put("from", remoteMessage.getFrom());
            message.put("messageId", remoteMessage.getMessageId());
            message.put("messageType", remoteMessage.getMessageType());
            message.put("collapseKey", remoteMessage.getCollapseKey());
            message.put("priority", remoteMessage.getPriority());
            message.put("originalPriority", remoteMessage.getOriginalPriority());

            if (remoteMessage.getNotification() != null) {
                JSONObject notification = new JSONObject();
                RemoteMessage.Notification notif = remoteMessage.getNotification();

                JSONObject android = new JSONObject();
                if (notif.getChannelId() != null) {
                    android.put("channelId", notif.getChannelId());
                }

                if (android.length() > 0) {
                    notification.put("android", android);
                }

                message.put("notification", notification);
            }

            message.put("sentTime", remoteMessage.getSentTime());
            message.put("to", remoteMessage.getTo());
            message.put("ttl", remoteMessage.getTtl());

        } catch (JSONException e) {
            e.printStackTrace();
        }
        return message;
    }

    private static boolean isUsingStandalone = false;

    public static void init(Context context) {
        init(context, false);
    }

    public static void init(Context context, boolean useStandalone) {
        if (applicationContext == null) {
            applicationContext = context.getApplicationContext();
        }
        if (preferences == null) {
            preferences = context.getSharedPreferences(PREFERENCES_FILE, Context.MODE_PRIVATE);
        }
        isUsingStandalone = useStandalone;
    }

    public static void setOnTokenListener(Callback<String> callback) {
        onTokenListener = callback;
    }

    public static void setOnMessageListener(Callback<String> callback) {
        onMessageListener = callback;
    }

    public static void setOnMessageTapListener(Callback<String> callback) {
        onMessageTapListener = callback;
    }

    public static void handleActivityIntent(Intent intent) {
        if (onMessageTapListener != null && intent != null) {
            Bundle pushTabData = IterableApi.getInstance().getPayloadData();

            // NOTE: descomentar si se quiere ver que llega en la notificación
            /**
            if (pushTabData != null) {
                for (String key : pushTabData.keySet()) {
                    Log.e("Global66PUSHTab", key + " : " + (pushTabData.get(key) != null ? pushTabData.get(key) : "NULL"));
                }
            }
            **/

            if (pushTabData != null) {
                if (pushTabData.getString("itbl") == null) {
                    return;
                }

                String messageId = "";

                try {
                    JSONObject itbl = new JSONObject(pushTabData.getString("itbl", "{}"));
                    messageId = itbl.getString("messageId");
                } catch (JSONException e) {
                    Log.e(TAG, e.getMessage());
                }

                if (messageId != null) {
                    Set<String> keys = remoteMessageMap.keySet();
                    RemoteMessage remoteMessage = remoteMessageMap.get(String.valueOf(messageId));

                    if (remoteMessage != null) {
                        JSONObject finalJson = remoteMessageToJson(remoteMessage);
                        try {
                            finalJson.put("actionType", pushTabData.getString("actionIdentifier", "default"));
                        } catch (JSONException e) {
                            Log.e(TAG, e.getMessage());
                        }
                        onMessageTapListener.onSuccess(finalJson.toString());
                        remoteMessageMap.remove(messageId);
                    } else {
                        SharedPreferences preferences = applicationContext.getSharedPreferences(PREFERENCES_FILE, Context.MODE_PRIVATE);
                        if (preferences != null) {
                            String message = preferences.getString(messageId, "");
                            if (!message.isEmpty()) {
                                onMessageTapListener.onSuccess(message);
                                preferences.edit().remove(messageId).apply();
                            }
                        }
                    }
                }
            }
        }
    }

    public static void getToken(FirebaseMessaging messaging, Callback<String> callback) {
        messaging.getToken()
                .addOnCompleteListener(task -> {
                    if (task.isSuccessful()) {
                        runOnMain(() -> callback.onSuccess(task.getResult()));
                    } else {
                        runOnMain(() -> callback.onError(task.getException()));
                    }
                });
    }

    public static void deleteToken(FirebaseMessaging messaging, Callback<Void> callback) {
        messaging.deleteToken()
                .addOnCompleteListener(task -> {
                    if (task.isSuccessful()) {
                        runOnMain(() -> callback.onSuccess(task.getResult()));
                    } else {
                        runOnMain(() -> callback.onError(task.getException()));
                    }
                });
    }

    public static boolean hasPermission(Context context) {
        return NotificationManagerCompat.from(context).areNotificationsEnabled();
    }

    public static int executorsCount = 3;

    public static void setExecutorsCount(int value) {
        executorsCount = value;
        executors = Executors.newFixedThreadPool(executorsCount);
    }

    private static ExecutorService executors = Executors.newFixedThreadPool(executorsCount);
    private static Handler handler = new Handler(Looper.getMainLooper());

    private static void runOnMain(Runnable runnable) {
        handler.post(runnable);
    }
}
