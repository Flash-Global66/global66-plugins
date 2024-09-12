declare class ImageCacheItUtils extends NSObject {
  static alloc(): ImageCacheItUtils; // inherited from NSObject

  static applyProcessing(ctx: CIContext, image: UIImage, filters: NSDictionary<string, any>, callback: (p1: UIImage) => void, queue: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

  static createConcurrentQueue(name: string): interop.Pointer | interop.Reference<any>;

  static createContext(): CIContext;

  static createImageOverlay(image: UIImage, color: string): UIImage;

  static createImageOverlayColors(image: UIImage, width: number, height: number, red: number, green: number, blue: number, alpha: number): UIImage;

  static createSerialQueue(name: string): interop.Pointer | interop.Reference<any>;

  static new(): ImageCacheItUtils; // inherited from NSObject
}

declare class IterableHelper extends NSObject {
  static alloc(): IterableHelper; // inherited from NSObject

  static new(): IterableHelper; // inherited from NSObject

  getTokenWithDeviceToken(deviceToken: NSData): string;
}

declare class NSCIterableAPI extends NSObject {
  static alloc(): NSCIterableAPI; // inherited from NSObject

  static disableDevice(): void;

  static getEmail(): string;

  static initializeWithApiKeyConfig(apiKey: string, configDict: NSDictionary<any, any>): void;

  static new(): NSCIterableAPI; // inherited from NSObject

  static registerWithDeviceToken(deviceToken: NSData): void;

  static setWithEmail(email: string): void;

  trackWithEventDataField(event: string, dataField: NSDictionary<any, any>): void;
}

declare class NSCIterableAppIntegration extends NSObject {
  static alloc(): NSCIterableAppIntegration; // inherited from NSObject

  static applicationDidReceiveRemoteNotificationFetchCompletionHandler(application: UIApplication, userInfo: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

  static new(): NSCIterableAppIntegration; // inherited from NSObject

  static userNotificationDidReceiveWithCompletionHandler(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void): void;
}

declare class NativeScriptContainerCtrl extends UIViewController {
  static alloc(): NativeScriptContainerCtrl; // inherited from NSObject

  static new(): NativeScriptContainerCtrl; // inherited from NSObject

  updateData: (p1: NSMutableDictionary<any, any>) => void;
}

declare class NativeScriptViewFactory extends NSObject implements NativeScriptEmbedderDelegate {
  static alloc(): NativeScriptViewFactory; // inherited from NSObject

  static getKeyWindow(): UIWindow;

  static initShared(): void;

  static new(): NativeScriptViewFactory; // inherited from NSObject

  static setApp(value: NativeScriptContainerCtrl): void;

  static setShared(value: NativeScriptViewFactory): void;

  viewCreator: (p1: string) => void;

  viewDestroyer: (p1: string) => void;

  views: NSMutableDictionary<any, any>;

  static app: NativeScriptContainerCtrl;

  static shared: NativeScriptViewFactory;

  getViewById(id: string): UIView;

  presentNativeScriptApp(vc: UIViewController): any;
}

declare class TNSFirebaseDynamicLinksAppDelegate extends UIResponder implements UIApplicationDelegate {
  static alloc(): TNSFirebaseDynamicLinksAppDelegate; // inherited from NSObject

  static new(): TNSFirebaseDynamicLinksAppDelegate; // inherited from NSObject

  static setOnLinkCallback(value: (p1: FIRDynamicLink, p2: NSError) => void): void;

  static onLinkCallback: (p1: FIRDynamicLink, p2: NSError) => void;

  static readonly sharedInstance: TNSFirebaseDynamicLinksAppDelegate;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  window: UIWindow; // inherited from UIApplicationDelegate

  readonly; // inherited from NSObjectProtocol

  applicationConfigurationForConnectingSceneSessionOptions(application: UIApplication, connectingSceneSession: UISceneSession, options: UISceneConnectionOptions): UISceneConfiguration;

  applicationContinueUserActivityRestorationHandler(application: UIApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray<UIUserActivityRestoring>) => void): boolean;

  applicationDidBecomeActive(application: UIApplication): void;

  applicationDidChangeStatusBarFrame(application: UIApplication, oldStatusBarFrame: CGRect): void;

  applicationDidChangeStatusBarOrientation(application: UIApplication, oldStatusBarOrientation: UIInterfaceOrientation): void;

  applicationDidDecodeRestorableStateWithCoder(application: UIApplication, coder: NSCoder): void;

  applicationDidDiscardSceneSessions(application: UIApplication, sceneSessions: NSSet<UISceneSession>): void;

  applicationDidEnterBackground(application: UIApplication): void;

  applicationDidFailToContinueUserActivityWithTypeError(application: UIApplication, userActivityType: string, error: NSError): void;

  applicationDidFailToRegisterForRemoteNotificationsWithError(application: UIApplication, error: NSError): void;

  applicationDidFinishLaunching(application: UIApplication): void;

  applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean;

  applicationDidReceiveLocalNotification(application: UIApplication, notification: UILocalNotification): void;

  applicationDidReceiveMemoryWarning(application: UIApplication): void;

  applicationDidReceiveRemoteNotification(application: UIApplication, userInfo: NSDictionary<any, any>): void;

  applicationDidReceiveRemoteNotificationFetchCompletionHandler(application: UIApplication, userInfo: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

  applicationDidRegisterForRemoteNotificationsWithDeviceToken(application: UIApplication, deviceToken: NSData): void;

  applicationDidRegisterUserNotificationSettings(application: UIApplication, notificationSettings: UIUserNotificationSettings): void;

  applicationDidUpdateUserActivity(application: UIApplication, userActivity: NSUserActivity): void;

  applicationHandleActionWithIdentifierForLocalNotificationCompletionHandler(application: UIApplication, identifier: string, notification: UILocalNotification, completionHandler: () => void): void;

  applicationHandleActionWithIdentifierForLocalNotificationWithResponseInfoCompletionHandler(application: UIApplication, identifier: string, notification: UILocalNotification, responseInfo: NSDictionary<any, any>, completionHandler: () => void): void;

  applicationHandleActionWithIdentifierForRemoteNotificationCompletionHandler(application: UIApplication, identifier: string, userInfo: NSDictionary<any, any>, completionHandler: () => void): void;

  applicationHandleActionWithIdentifierForRemoteNotificationWithResponseInfoCompletionHandler(application: UIApplication, identifier: string, userInfo: NSDictionary<any, any>, responseInfo: NSDictionary<any, any>, completionHandler: () => void): void;

  applicationHandleEventsForBackgroundURLSessionCompletionHandler(application: UIApplication, identifier: string, completionHandler: () => void): void;

  applicationHandleIntentCompletionHandler(application: UIApplication, intent: INIntent, completionHandler: (p1: INIntentResponse) => void): void;

  applicationHandleOpenURL(application: UIApplication, url: NSURL): boolean;

  applicationHandleWatchKitExtensionRequestReply(application: UIApplication, userInfo: NSDictionary<any, any>, reply: (p1: NSDictionary<any, any>) => void): void;

  applicationHandlerForIntent(application: UIApplication, intent: INIntent): any;

  applicationOpenURLOptions(app: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean;

  applicationOpenURLSourceApplicationAnnotation(application: UIApplication, url: NSURL, sourceApplication: string, annotation: any): boolean;

  applicationPerformActionForShortcutItemCompletionHandler(application: UIApplication, shortcutItem: UIApplicationShortcutItem, completionHandler: (p1: boolean) => void): void;

  applicationPerformFetchWithCompletionHandler(application: UIApplication, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

  applicationProtectedDataDidBecomeAvailable(application: UIApplication): void;

  applicationProtectedDataWillBecomeUnavailable(application: UIApplication): void;

  applicationShouldAllowExtensionPointIdentifier(application: UIApplication, extensionPointIdentifier: string): boolean;

  applicationShouldAutomaticallyLocalizeKeyCommands(application: UIApplication): boolean;

  applicationShouldRequestHealthAuthorization(application: UIApplication): void;

  applicationShouldRestoreApplicationState(application: UIApplication, coder: NSCoder): boolean;

  applicationShouldRestoreSecureApplicationState(application: UIApplication, coder: NSCoder): boolean;

  applicationShouldSaveApplicationState(application: UIApplication, coder: NSCoder): boolean;

  applicationShouldSaveSecureApplicationState(application: UIApplication, coder: NSCoder): boolean;

  applicationSignificantTimeChange(application: UIApplication): void;

  applicationSupportedInterfaceOrientationsForWindow(application: UIApplication, window: UIWindow): UIInterfaceOrientationMask;

  applicationUserDidAcceptCloudKitShareWithMetadata(application: UIApplication, cloudKitShareMetadata: CKShareMetadata): void;

  applicationViewControllerWithRestorationIdentifierPathCoder(application: UIApplication, identifierComponents: NSArray<string> | string[], coder: NSCoder): UIViewController;

  applicationWillChangeStatusBarFrame(application: UIApplication, newStatusBarFrame: CGRect): void;

  applicationWillChangeStatusBarOrientationDuration(application: UIApplication, newStatusBarOrientation: UIInterfaceOrientation, duration: number): void;

  applicationWillContinueUserActivityWithType(application: UIApplication, userActivityType: string): boolean;

  applicationWillEncodeRestorableStateWithCoder(application: UIApplication, coder: NSCoder): void;

  applicationWillEnterForeground(application: UIApplication): void;

  applicationWillFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean;

  applicationWillResignActive(application: UIApplication): void;

  applicationWillTerminate(application: UIApplication): void;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}
