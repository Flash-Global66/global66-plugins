import { TypeTap } from '@global66/iterable-sdk/enums/tapType.enum';
import { PushData } from '@global66/iterable-sdk/interfaces/PushData.interface';

export interface PushDataExtends extends PushData {
  tapInfo: TapInfo;
}

export interface TapInfo {
  type: TypeTap;
  identifier: string;
  deepLink: string;
}
