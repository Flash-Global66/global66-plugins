export interface PushData {
  aps: Aps;
  itbl: Itbl;
  data: unknown;
}

export interface Aps {
  alert: Alert;
  'mutable-content': number;
  'interruption-level': string;
}

export interface Alert {
  title: string;
  body: string;
}

export interface Itbl {
  messageId: string;
  defaultAction: DefaultAction;
  'attachment-url': string;
  templateId: number;
  actionButtons: ActionButton[];
  isGhostPush: boolean;
}

export interface DefaultAction {
  type: string;
  data: string;
}

export interface ActionButton {
  action: Action;
  inputPlaceholder: string;
  openApp: boolean;
  requiresUnlock: boolean;
  title: string;
  buttonType: string;
  identifier: string;
  inputTitle: string;
  actionIcon: ActionIcon;
}

export interface Action {
  type: string;
  data: string;
}

export interface ActionIcon {
  imageName: string;
  iconType: string;
}
