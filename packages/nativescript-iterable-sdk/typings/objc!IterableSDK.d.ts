
declare class AllLogDelegate extends NSObject implements IterableLogDelegate {

	static alloc(): AllLogDelegate; // inherited from NSObject

	static new(): AllLogDelegate; // inherited from NSObject

	logMessage(level: IterableLogLevel, message: string): void;
}

interface ApplicationStateProviderProtocol {

	applicationState: UIApplicationState;
}
declare var ApplicationStateProviderProtocol: {

	prototype: ApplicationStateProviderProtocol;
};

declare class CommerceItem extends NSObject {

	static alloc(): CommerceItem; // inherited from NSObject

	static new(): CommerceItem; // inherited from NSObject

	categories: NSArray<string>;

	dataFields: NSDictionary<any, any>;

	id: string;

	imageUrl: string;

	itemDescription: string;

	name: string;

	price: number;

	quantity: number;

	sku: string;

	url: string;

	constructor(o: { id: string; name: string; price: number; quantity: number; sku: string; description: string; url: string; imageUrl: string; categories: NSArray<string> | string[]; dataFields: NSDictionary<any, any>; });

	initWithIdNamePriceQuantitySkuDescriptionUrlImageUrlCategoriesDataFields(id: string, name: string, price: number, quantity: number, sku: string, description: string, url: string, imageUrl: string, categories: NSArray<string> | string[], dataFields: NSDictionary<any, any>): this;

	toDictionary(): NSDictionary<any, any>;
}

declare class DefaultLogDelegate extends NSObject implements IterableLogDelegate {

	static alloc(): DefaultLogDelegate; // inherited from NSObject

	static new(): DefaultLogDelegate; // inherited from NSObject

	logMessage(level: IterableLogLevel, message: string): void;
}

declare const enum InAppCloseSource {

	Back = 0,

	Link = 1
}

declare const enum InAppDeleteSource {

	InboxSwipe = 0,

	DeleteButton = 1
}

declare const enum InAppLocation {

	InApp = 0,

	Inbox = 1
}

declare const enum InAppShowResponse {

	Show = 0,

	Skip = 1
}

declare class IterableAPI extends NSObject {

	static alloc(): IterableAPI; // inherited from NSObject

	static disableDeviceForAllUsers(): void;

	static disableDeviceForAllUsersWithOnSuccessOnFailure(onSuccess: (p1: NSDictionary<any, any>) => void, onFailure: (p1: string, p2: NSData) => void): void;

	static disableDeviceForCurrentUser(): void;

	static disableDeviceForCurrentUserWithOnSuccessOnFailure(onSuccess: (p1: NSDictionary<any, any>) => void, onFailure: (p1: string, p2: NSData) => void): void;

	static embeddedMessageClickButtonIdentifierClickedUrl(embeddedMessageClick: IterableEmbeddedMessage, buttonIdentifier: string, clickedUrl: string): void;

	static embeddedMessageReceived(embeddedMessageReceived: IterableEmbeddedMessage): void;

	static embeddedSession(embeddedSession: IterableEmbeddedSession): void;

	static handleUniversalLink(url: NSURL): boolean;

	static inAppConsumeLocation(message: IterableInAppMessage, location: InAppLocation): void;

	static inAppConsumeLocationSource(message: IterableInAppMessage, location: InAppLocation, source: InAppDeleteSource): void;

	static initialize2WithApiKeyLaunchOptionsConfigApiEndPointOverrideCallback(apiKey: string, launchOptions: NSDictionary<string, any>, config: IterableConfig, apiEndPointOverride: string, callback: (p1: boolean) => void): void;

	static initializeWithApiKey(apiKey: string): void;

	static initializeWithApiKeyConfig(apiKey: string, config: IterableConfig): void;

	static initializeWithApiKeyLaunchOptions(apiKey: string, launchOptions: NSDictionary<string, any>): void;

	static initializeWithApiKeyLaunchOptionsConfig(apiKey: string, launchOptions: NSDictionary<string, any>, config: IterableConfig): void;

	static logoutUser(): void;

	static new(): IterableAPI; // inherited from NSObject

	static registerToken(token: NSData): void;

	static registerTokenOnSuccessOnFailure(token: NSData, onSuccess: (p1: NSDictionary<any, any>) => void, onFailure: (p1: string, p2: NSData) => void): void;

	static removeDeviceAttribute(name: string): void;

	static setAttributionInfo(newValue: IterableAttributionInfo): void;

	static setDeviceAttributeValue(name: string, value: string): void;

	static setEmail(email: string, authToken: string, successHandler: (p1: NSDictionary<any, any>) => void, failureHandler: (p1: string, p2: NSData) => void): void;

	static setUserId(userId: string, authToken: string, successHandler: (p1: NSDictionary<any, any>) => void, failureHandler: (p1: string, p2: NSData) => void): void;

	static track(eventName: string): void;

	static trackDataFields(eventName: string, dataFields: NSDictionary<any, any>): void;

	static trackDataFieldsOnSuccessOnFailure(eventName: string, dataFields: NSDictionary<any, any>, onSuccess: (p1: NSDictionary<any, any>) => void, onFailure: (p1: string, p2: NSData) => void): void;

	static trackInAppClickLocationClickedUrl(message: IterableInAppMessage, location: InAppLocation, clickedUrl: string): void;

	static trackInAppCloseClickedUrl(message: IterableInAppMessage, clickedUrl: string): void;

	static trackInAppCloseLocationClickedUrl(message: IterableInAppMessage, location: InAppLocation, clickedUrl: string): void;

	static trackInAppCloseLocationSourceClickedUrl(message: IterableInAppMessage, location: InAppLocation, source: InAppCloseSource, clickedUrl: string): void;

	static trackInAppOpenLocation(message: IterableInAppMessage, location: InAppLocation): void;

	static trackInboxSession(inboxSession: IterableInboxSession): void;

	static trackPurchaseItems(withTotal: number, items: NSArray<CommerceItem> | CommerceItem[]): void;

	static trackPurchaseItemsDataFields(withTotal: number, items: NSArray<CommerceItem> | CommerceItem[], dataFields: NSDictionary<any, any>): void;

	static trackPurchaseItemsDataFieldsCampaignIdTemplateIdOnSuccessOnFailure(withTotal: number, items: NSArray<CommerceItem> | CommerceItem[], dataFields: NSDictionary<any, any>, campaignId: number, templateId: number, onSuccess: (p1: NSDictionary<any, any>) => void, onFailure: (p1: string, p2: NSData) => void): void;

	static trackPurchaseItemsDataFieldsOnSuccessOnFailure(withTotal: number, items: NSArray<CommerceItem> | CommerceItem[], dataFields: NSDictionary<any, any>, onSuccess: (p1: NSDictionary<any, any>) => void, onFailure: (p1: string, p2: NSData) => void): void;

	static trackPushOpen(userInfo: NSDictionary<any, any>): void;

	static trackPushOpenDataFields(userInfo: NSDictionary<any, any>, dataFields: NSDictionary<any, any>): void;

	static trackPushOpenDataFieldsOnSuccessOnFailure(userInfo: NSDictionary<any, any>, dataFields: NSDictionary<any, any>, onSuccess: (p1: NSDictionary<any, any>) => void, onFailure: (p1: string, p2: NSData) => void): void;

	static trackPushOpenTemplateIdMessageIdAppAlreadyRunningDataFields(campaignId: number, templateId: number, messageId: string, appAlreadyRunning: boolean, dataFields: NSDictionary<any, any>): void;

	static trackPushOpenTemplateIdMessageIdAppAlreadyRunningDataFieldsOnSuccessOnFailure(campaignId: number, templateId: number, messageId: string, appAlreadyRunning: boolean, dataFields: NSDictionary<any, any>, onSuccess: (p1: NSDictionary<any, any>) => void, onFailure: (p1: string, p2: NSData) => void): void;

	static updateCart(items: NSArray<CommerceItem> | CommerceItem[]): void;

	static updateCartOnSuccessOnFailure(items: NSArray<CommerceItem> | CommerceItem[], onSuccess: (p1: NSDictionary<any, any>) => void, onFailure: (p1: string, p2: NSData) => void): void;

	static updateEmailOnSuccessOnFailure(newEmail: string, onSuccess: (p1: NSDictionary<any, any>) => void, onFailure: (p1: string, p2: NSData) => void): void;

	static updateEmailWithTokenOnSuccessOnFailure(newEmail: string, token: string, onSuccess: (p1: NSDictionary<any, any>) => void, onFailure: (p1: string, p2: NSData) => void): void;

	static updateSubscriptionsUnsubscribedChannelIdsUnsubscribedMessageTypeIdsSubscribedMessageTypeIdsCampaignIdTemplateId(emailListIds: NSArray<number> | number[], unsubscribedChannelIds: NSArray<number> | number[], unsubscribedMessageTypeIds: NSArray<number> | number[], subscribedMessageTypeIds: NSArray<number> | number[], campaignId: number, templateId: number): void;

	static updateUserMergeNestedObjectsOnSuccessOnFailure(dataFields: NSDictionary<any, any>, mergeNestedObjects: boolean, onSuccess: (p1: NSDictionary<any, any>) => void, onFailure: (p1: string, p2: NSData) => void): void;

	static attributionInfo: IterableAttributionInfo;

	static readonly authToken: string;

	static email: string;

	static readonly inAppManager: IterableInAppManagerProtocol;

	static readonly lastPushPayload: NSDictionary<any, any>;

	static readonly sdkVersion: string;

	static userId: string;
}

declare class IterableAction extends NSObject {

	static actionFromDictionary(dictionary: NSDictionary<any, any>): IterableAction;

	static actionOpenUrl(fromUrlString: string): IterableAction;

	static alloc(): IterableAction; // inherited from NSObject

	static new(): IterableAction; // inherited from NSObject

	data: string;

	type: string;

	userInput: string;

	static readonly actionTypeOpenUrl: string;

	isOpenUrl(): boolean;
}

declare class IterableActionContext extends NSObject {

	static alloc(): IterableActionContext; // inherited from NSObject

	static new(): IterableActionContext; // inherited from NSObject

	readonly action: IterableAction;

	readonly source: IterableActionSource;

	constructor(o: { action: IterableAction; source: IterableActionSource; });

	initWithActionSource(action: IterableAction, source: IterableActionSource): this;
}

declare const enum IterableActionSource {

	Push = 0,

	UniversalLink = 1,

	InApp = 2,

	Embedded = 3
}

declare class IterableAppIntegration extends NSObject {

	static alloc(): IterableAppIntegration; // inherited from NSObject

	static applicationDidReceiveRemoteNotificationFetchCompletionHandler(application: UIApplication, userInfo: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	static new(): IterableAppIntegration; // inherited from NSObject

	static userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void): void;
}

declare class IterableAttributionInfo extends NSObject {

	static alloc(): IterableAttributionInfo; // inherited from NSObject

	static new(): IterableAttributionInfo; // inherited from NSObject

	campaignId: number;

	messageId: string;

	templateId: number;

	constructor(o: { campaignId: number; templateId: number; messageId: string; });

	initWithCampaignIdTemplateIdMessageId(campaignId: number, templateId: number, messageId: string): this;
}

interface IterableAuthDelegate {

	onAuthTokenRequestedWithCompletion(completion: (p1: string) => void): void;

	onTokenRegistrationFailed(reason: string): void;
}
declare var IterableAuthDelegate: {

	prototype: IterableAuthDelegate;
};

interface IterableAuthManagerProtocol {

	getAuthToken(): string;

	logoutUser(): void;

	requestNewAuthTokenWithHasFailedPriorAuthOnSuccess(hasFailedPriorAuth: boolean, onSuccess: (p1: string) => void): void;

	resetFailedAuthCount(): void;

	setNewToken(newToken: string): void;
}
declare var IterableAuthManagerProtocol: {

	prototype: IterableAuthManagerProtocol;
};

declare class IterableConfig extends NSObject {

	static alloc(): IterableConfig; // inherited from NSObject

	static new(): IterableConfig; // inherited from NSObject

	allowedProtocols: NSArray<string>;

	authDelegate: IterableAuthDelegate;

	autoPushRegistration: boolean;

	checkForDeferredDeeplink: boolean;

	customActionDelegate: IterableCustomActionDelegate;

	dataRegion: string;

	enableEmbeddedMessaging: boolean;

	expiringAuthTokenRefreshPeriod: number;

	inAppDelegate: IterableInAppDelegate;

	inAppDisplayInterval: number;

	logDelegate: IterableLogDelegate;

	pushIntegrationName: string;

	pushPlatform: PushServicePlatform;

	sandboxPushIntegrationName: string;

	urlDelegate: IterableURLDelegate;

	useInMemoryStorageForInApps: boolean;
}

interface IterableCustomActionDelegate {

	handleIterableCustomActionContext(action: IterableAction, context: IterableActionContext): boolean;
}
declare var IterableCustomActionDelegate: {

	prototype: IterableCustomActionDelegate;
};

declare class IterableEMButton extends UIButton {

	static alloc(): IterableEMButton; // inherited from NSObject

	static appearance(): IterableEMButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): IterableEMButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): IterableEMButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): IterableEMButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): IterableEMButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): IterableEMButton; // inherited from UIAppearance

	static buttonWithConfigurationPrimaryAction(configuration: UIButtonConfiguration, primaryAction: UIAction): IterableEMButton; // inherited from UIButton

	static buttonWithType(buttonType: UIButtonType): IterableEMButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): IterableEMButton; // inherited from UIButton

	static new(): IterableEMButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): IterableEMButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): IterableEMButton; // inherited from UIButton

	isRoundedSides: boolean;
}

declare class IterableEmbeddedImpression extends NSObject {

	static alloc(): IterableEmbeddedImpression; // inherited from NSObject

	static new(): IterableEmbeddedImpression; // inherited from NSObject
}

declare class IterableEmbeddedMessage extends NSObject {

	static alloc(): IterableEmbeddedMessage; // inherited from NSObject

	static new(): IterableEmbeddedMessage; // inherited from NSObject

	readonly payload: NSDictionary<any, any>;
}

declare class IterableEmbeddedSession extends NSObject {

	static alloc(): IterableEmbeddedSession; // inherited from NSObject

	static new(): IterableEmbeddedSession; // inherited from NSObject
}

interface IterableEmbeddedUpdateDelegate {

	onEmbeddedMessagingDisabled(): void;

	onMessagesUpdated(): void;
}
declare var IterableEmbeddedUpdateDelegate: {

	prototype: IterableEmbeddedUpdateDelegate;
};

declare class IterableEmbeddedView extends UIView {

	static alloc(): IterableEmbeddedView; // inherited from NSObject

	static appearance(): IterableEmbeddedView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): IterableEmbeddedView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): IterableEmbeddedView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): IterableEmbeddedView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): IterableEmbeddedView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): IterableEmbeddedView; // inherited from UIAppearance

	static new(): IterableEmbeddedView; // inherited from NSObject

	cardImageView: UIImageView;

	contentView: UIView;

	imageViewHeightConstraint: NSLayoutConstraint;

	imageViewWidthConstraint: NSLayoutConstraint;

	imgView: UIImageView;

	labelDescription: UILabel;

	labelTitle: UILabel;

	primaryBtn: IterableEMButton;

	secondaryBtn: IterableEMButton;

	primaryButtonPressed(sender: UIButton): void;
}

declare class IterableEmbeddedViewConfig extends NSObject {

	static alloc(): IterableEmbeddedViewConfig; // inherited from NSObject

	static new(): IterableEmbeddedViewConfig; // inherited from NSObject
}

declare class IterableHtmlInAppContent extends NSObject implements IterableInAppContent {

	static alloc(): IterableHtmlInAppContent; // inherited from NSObject

	static new(): IterableHtmlInAppContent; // inherited from NSObject

	readonly backgroundColor: UIColor;

	readonly edgeInsets: UIEdgeInsets;

	readonly html: string;

	readonly shouldAnimate: boolean;

	readonly type: IterableInAppContentType; // inherited from IterableInAppContent
}

interface IterableInAppContent {

	type: IterableInAppContentType;
}
declare var IterableInAppContent: {

	prototype: IterableInAppContent;
};

declare const enum IterableInAppContentType {

	Html = 0,

	Alert = 1,

	Banner = 2
}

interface IterableInAppDelegate {

	onNewMessage(message: IterableInAppMessage): InAppShowResponse;
}
declare var IterableInAppDelegate: {

	prototype: IterableInAppDelegate;
};

interface IterableInAppManagerProtocol {

	isAutoDisplayPaused: boolean;

	getInboxMessages(): NSArray<IterableInAppMessage>;

	getMessageWithId(id: string): IterableInAppMessage;

	getMessages(): NSArray<IterableInAppMessage>;

	getUnreadInboxMessagesCount(): number;

	removeMessage(message: IterableInAppMessage): void;

	removeMessageLocation(message: IterableInAppMessage, location: InAppLocation): void;

	removeMessageLocationSource(message: IterableInAppMessage, location: InAppLocation, source: InAppDeleteSource): void;

	removeMessageLocationSourceSuccessHandlerFailureHandler(message: IterableInAppMessage, location: InAppLocation, source: InAppDeleteSource, successHandler: (p1: NSDictionary<any, any>) => void, failureHandler: (p1: string, p2: NSData) => void): void;

	removeMessageLocationSuccessHandlerFailureHandler(message: IterableInAppMessage, location: InAppLocation, successHandler: (p1: NSDictionary<any, any>) => void, failureHandler: (p1: string, p2: NSData) => void): void;

	removeMessageSuccessHandlerFailureHandler(message: IterableInAppMessage, successHandler: (p1: NSDictionary<any, any>) => void, failureHandler: (p1: string, p2: NSData) => void): void;

	setReadForMessage(read: boolean, message: IterableInAppMessage): void;

	setReadForMessageSuccessHandlerFailureHandler(read: boolean, message: IterableInAppMessage, successHandler: (p1: NSDictionary<any, any>) => void, failureHandler: (p1: string, p2: NSData) => void): void;

	showMessage(message: IterableInAppMessage): void;

	showMessageConsumeCallbackBlock(message: IterableInAppMessage, consume: boolean, callback: (p1: NSURL) => void): void;
}
declare var IterableInAppManagerProtocol: {

	prototype: IterableInAppManagerProtocol;
};

declare class IterableInAppMessage extends NSObject {

	static alloc(): IterableInAppMessage; // inherited from NSObject

	static new(): IterableInAppMessage; // inherited from NSObject

	readonly campaignId: number;

	readonly content: IterableInAppContent;

	readonly createdAt: Date;

	readonly customPayload: NSDictionary<any, any>;

	readonly expiresAt: Date;

	readonly inboxMetadata: IterableInboxMetadata;

	readonly messageId: string;

	priorityLevel: number;

	read: boolean;

	readonly saveToInbox: boolean;

	readonly silentInbox: boolean;

	readonly trigger: IterableInAppTrigger;
}

declare class IterableInAppTrigger extends NSObject {

	static alloc(): IterableInAppTrigger; // inherited from NSObject

	static new(): IterableInAppTrigger; // inherited from NSObject

	readonly type: IterableInAppTriggerType;
}

declare const enum IterableInAppTriggerType {

	Immediate = 0,

	Event = 1,

	Never = 2
}

declare class IterableInboxCell extends UITableViewCell {

	static alloc(): IterableInboxCell; // inherited from NSObject

	static appearance(): IterableInboxCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): IterableInboxCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): IterableInboxCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): IterableInboxCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): IterableInboxCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): IterableInboxCell; // inherited from UIAppearance

	static new(): IterableInboxCell; // inherited from NSObject

	createdAtLbl: UILabel;

	iconContainerView: UIView;

	iconImageView: UIImageView;

	subtitleLbl: UILabel;

	titleLbl: UILabel;

	unreadCircleView: UIView;
}

declare class IterableInboxImpression extends NSObject {

	static alloc(): IterableInboxImpression; // inherited from NSObject

	static new(): IterableInboxImpression; // inherited from NSObject
}

declare class IterableInboxMetadata extends NSObject {

	static alloc(): IterableInboxMetadata; // inherited from NSObject

	static new(): IterableInboxMetadata; // inherited from NSObject

	readonly icon: string;

	readonly subtitle: string;

	readonly title: string;
}

declare class IterableInboxNavigationViewController extends UINavigationController {

	static alloc(): IterableInboxNavigationViewController; // inherited from NSObject

	static new(): IterableInboxNavigationViewController; // inherited from NSObject

	cellNibName: string;

	groupSections: boolean;

	isPopup: boolean;

	largeTitles: boolean;

	navTitle: string;

	noMessagesBody: string;

	noMessagesTitle: string;

	viewDelegate: IterableInboxViewControllerViewDelegate;

	viewDelegateClassName: string;
}

declare class IterableInboxSession extends NSObject {

	static alloc(): IterableInboxSession; // inherited from NSObject

	static new(): IterableInboxSession; // inherited from NSObject
}

declare class IterableInboxViewController extends UITableViewController {

	static alloc(): IterableInboxViewController; // inherited from NSObject

	static new(): IterableInboxViewController; // inherited from NSObject

	cellNibName: string;

	deletionAnimation: UITableViewRowAnimation;

	insertionAnimation: UITableViewRowAnimation;

	isPopup: boolean;

	noMessagesBody: string;

	noMessagesTitle: string;

	showCountInUnreadBadge: boolean;

	viewDelegate: IterableInboxViewControllerViewDelegate;

	viewDelegateClassName: string;
}

interface IterableInboxViewControllerViewDelegate {

	comparator?: (p1: IterableInAppMessage, p2: IterableInAppMessage) => boolean;

	customNibNameMapper?: (p1: IterableInAppMessage) => string;

	customNibNames?: NSArray<string>;

	dateMapper?: (p1: IterableInAppMessage) => string;

	filter?: (p1: IterableInAppMessage) => boolean;

	messageToSectionMapper?: (p1: IterableInAppMessage) => number;

	init?(): IterableInboxViewControllerViewDelegate;

	renderAdditionalFieldsForCellWithMessage?(cell: IterableInboxCell, message: IterableInAppMessage): void;
}
declare var IterableInboxViewControllerViewDelegate: {

	prototype: IterableInboxViewControllerViewDelegate;
};

interface IterableLogDelegate {

	logMessage(level: IterableLogLevel, message: string): void;
}
declare var IterableLogDelegate: {

	prototype: IterableLogDelegate;
};

declare const enum IterableLogLevel {

	Debug = 1,

	Info = 2,

	Error = 3
}

declare var IterableSDKVersionNumber: number;

declare var IterableSDKVersionString: interop.Reference<number>;

declare class IterableTaskManagedObject extends NSManagedObject {

	static alloc(): IterableTaskManagedObject; // inherited from NSObject

	static new(): IterableTaskManagedObject; // inherited from NSObject

	attempts: number;

	blocking: boolean;

	createdAt: Date;

	data: NSData;

	failed: boolean;

	id: string;

	lastAttemptedAt: Date;

	modifiedAt: Date;

	name: string;

	processing: boolean;

	requestedAt: Date;

	scheduledAt: Date;

	taskFailureData: NSData;

	type: string;

	version: number;
}

interface IterableURLDelegate {

	handleIterableURLContext(url: NSURL, context: IterableActionContext): boolean;
}
declare var IterableURLDelegate: {

	prototype: IterableURLDelegate;
};

declare class NoneLogDelegate extends NSObject implements IterableLogDelegate {

	static alloc(): NoneLogDelegate; // inherited from NSObject

	static new(): NoneLogDelegate; // inherited from NSObject

	logMessage(level: IterableLogLevel, message: string): void;
}

declare const enum PushServicePlatform {

	Sandbox = 0,

	Production = 1,

	Auto = 2
}

declare var swift_sdkVersionNumber: number;

declare var swift_sdkVersionString: interop.Reference<number>;
