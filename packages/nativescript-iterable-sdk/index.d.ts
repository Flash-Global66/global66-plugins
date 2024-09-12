import { IterableSdkCommon } from './common';
import { AuthorizationResultEnum, IterableLogLevelEnum } from '@global66-plugin/nativescript-iterable-sdk/enums';

type IterableLogKey = keyof typeof IterableLogLevelEnum;
type IterableLogValues = IterableLogLevelEnum[IterableLogKey];

export declare class IterableSdk extends IterableSdkCommon {
  static getInstance(): IterableSdk;

  start(tokenKey: string, configure: IterableSdkConfig): Promise<void>;

  setEmail(email: string): void;

  hasPermission(): Promise<AuthorizationResultEnum>;
  requestPermission(): Promise<AuthorizationResultEnum>;

  addOnMessageCallback(callbackPushTap: (message: string) => void): void;
  addOnTapNotificationCallback(callbackTapNotification: (data: string) => void): void;
  addOnTokenCallback(callbackOnToken: (newToken: string) => void): void;
  getToken(): Promise<string>;
}

export interface IterableSdkConfig {
  allowedProtocols: string[];
  pushIntegrationName?: string;

  logLevel: IterableLogValues;
  onCreated: () => void;
}

export * from './common';
