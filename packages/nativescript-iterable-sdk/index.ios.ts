import { IterableSdkCommon } from './common';
export class IterableSdk extends IterableSdkCommon {}

@NativeClass()
class UNUserNotificationCenterDelegateImpl extends NSObject implements UNUserNotificationCenterDelegate {
  public static ObjCProtocols = [];

  static new(): UNUserNotificationCenterDelegateImpl {
    if (UNUserNotificationCenterDelegateImpl.ObjCProtocols.length === 0 && typeof UNUserNotificationCenterDelegate !== 'undefined') {
      UNUserNotificationCenterDelegateImpl.ObjCProtocols.push(UNUserNotificationCenterDelegate);
    }
    return <UNUserNotificationCenterDelegateImpl>super.new();
  }

  private _owner: WeakRef<IterableSdk>;

  public static initWithOwner(owner: WeakRef<IterableSdk>): UNUserNotificationCenterDelegateImpl {
    const delegate = <UNUserNotificationCenterDelegateImpl>UNUserNotificationCenterDelegateImpl.new();
    delegate._owner = owner;
    return delegate;
  }

  public userNotificationCenterWillPresentNotificationWithCompletionHandler(center: UNUserNotificationCenter, notification: UNNotification, completionHandler: (p1: UNNotificationPresentationOptions) => void): void {
    const owner = this._owner.deref();
    // onMessage(notification.request.content.userInfo)
    completionHandler(UNNotificationPresentationOptions.Banner | UNNotificationPresentationOptions.Badge | UNNotificationPresentationOptions.Sound);
  }

  public userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void): void {
    // onTap(response.notification.request.content.userInfo, response.actionIdentifier)
    IterableAppIntegration.userNotificationCenter(center, response, completionHandler);
  }
}

class IterableAppIntegration {
  static application(application: UIApplication, userInfo: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void) {
    NSCIterableAppIntegration.applicationDidReceiveRemoteNotificationFetchCompletionHandler(application, userInfo, completionHandler);
  }

  static userNotificationCenter(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void) {
    NSCIterableAppIntegration.userNotificationDidReceiveWithCompletionHandler(center, response, completionHandler);
  }
}

class InnerIterableSDK {
  static async start(tokenKey: string, configure: NSDictionary<any, any>) {
    NSCIterableAPI.initializeWithApiKeyConfig(tokenKey, configure);
  }

  static setEmail(email: string) {
    NSCIterableAPI.setWithEmail(email);
  }

  static registerDeviceToken(deviceToken: NSData) {
    NSCIterableAPI.registerWithDeviceToken(deviceToken);
  }
}
