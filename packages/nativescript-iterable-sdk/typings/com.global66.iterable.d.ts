// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./android-declarations.d.ts"/>

declare namespace com {
  export namespace global66 {
    export namespace iterable {
      export class BuildConfig {
        public static class: java.lang.Class<com.global66.iterable.BuildConfig>;
        public static DEBUG: boolean;
        public static LIBRARY_PACKAGE_NAME: string;
        public static BUILD_TYPE: string;
        public constructor();
      }
    }
  }
}

declare namespace com {
  export namespace global66 {
    export namespace iterable {
      export class Global66IterableMessage {
        public static class: java.lang.Class<com.global66.iterable.message.Global66IterableMessage>;
        public static executorsCount: number;
        public static init(param0: globalAndroid.content.Context): void;
        public static init(param0: globalAndroid.content.Context, param1: boolean): void;
        public static setOnTokenListener(param0: com.global66.iterable.message.Global66IterableMessage.Callback<string>): void;
        public static deleteToken(param0: com.google.firebase.messaging.FirebaseMessaging, param1: com.global66.iterable.message.Global66IterableMessage.Callback<java.lang.Void>): void;
        public static hasPermission(param0: globalAndroid.content.Context): boolean;
        public constructor();
        public static setOnMessageListener(param0: com.global66.iterable.message.Global66IterableMessage.Callback<string>): void;
        public static handleActivityIntent(param0: globalAndroid.content.Intent): void;
        public static getToken(param0: com.google.firebase.messaging.FirebaseMessaging, param1: com.global66.iterable.message.Global66IterableMessage.Callback<string>): void;
        public static setExecutorsCount(param0: number): void;
        public static setOnMessageTapListener(param0: com.global66.iterable.message.Global66IterableMessage.Callback<string>): void;
      }
      export namespace Global66IterableMessage {
        export class Callback<T> extends java.lang.Object {
          public static class: java.lang.Class<com.global66.iterable.message.Global66IterableMessage.Callback<any>>;
          /**
           * Constructs a new instance of the com.global66.iterable.message.Global66IterableMessage$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onSuccess(param0: T): void; onError(param0: any): void });
          public constructor();
          public onError(param0: any): void;
          public onSuccess(param0: T): void;
        }
        export class FirebaseMessagingReceiver {
          public static class: java.lang.Class<com.global66.iterable.message.Global66IterableMessage.FirebaseMessagingReceiver>;
          public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
          public constructor();
        }
        export class Service {
          public static class: java.lang.Class<com.global66.iterable.message.Global66IterableMessage.Service>;
          public onNewToken(param0: string): void;
          public constructor();
          public onMessageReceived(param0: com.google.firebase.messaging.RemoteMessage): void;
        }
      }
    }
  }
}

//Generics information:
//com.global66.iterable.message.Global66IterableMessage.Callback:1
