import { isIOS } from '@nativescript/core';
import { TapTypeEnum } from '@global66/iterable-sdk/enums/tapType.enum';
import { PushData } from '@global66/iterable-sdk/interfaces/PushData.interface';

export function getTypeTap(type: string): TapTypeEnum {
  if (isIOS) {
    return type == TapTypeEnum.IOS_DEFAULT_TAP ? TapTypeEnum.TAP_NOTIFICATION : TapTypeEnum.TAP_BUTTON;
  } else {
    return type == TapTypeEnum.ANDROID_DEFAULT_TAP ? TapTypeEnum.TAP_NOTIFICATION : TapTypeEnum.TAP_BUTTON;
  }
}

export function getDeepLink(notification: PushData, typeTap: TapTypeEnum, identifier: string): string {
  const deepLink = typeTap === TapTypeEnum.TAP_NOTIFICATION ? getDeepLinkFromNotification(notification) : getDeepLinkFromButton(notification, identifier);
  return deepLink;
}

function getDeepLinkFromNotification(notification: PushData): string {
  return notification.itbl?.defaultAction?.type;
}

function getDeepLinkFromButton(notification: PushData, identifier: string): string {
  const buttonTap = notification.itbl?.actionButtons?.find((action) => action.identifier === identifier);
  return buttonTap?.action?.type;
}

export function getDeepLinkObject(deepLink: string): { path: string; params: unknown } {
  let route = null;
  const routeProps = {};
  const deepLinkStructure = deepLink.split('?');

  if (deepLinkStructure[0]) {
    route = deepLinkStructure[0].split('/').slice(2).join('/');
  }

  if (!route) {
    return null;
  }

  if (route && deepLinkStructure[1]) {
    const paramsList = deepLinkStructure[1].split('&');

    paramsList.map((param) => {
      const paramData = param.split('=');
      routeProps[paramData[0]] = decodeURIComponent(paramData[1] || '');
    });
  }
  return {
    path: route,
    params: routeProps,
  };
}
