import { NativescriptIterableSdkCommon } from './common';
import { IterableConfig, IterableApi } from './typings/objc!IterableSDK'
export class Iterable extends NativescriptIterableSdkCommon {
  static savedConfig: IterableConfig
    static initialize(apiKey: string, config: IterableConfig = new IterableConfig()): Promise<boolean> {
      Iterable.savedConfig = config
    }
}
