import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptIterableSdk } from '@demo/shared';
import { } from '@global66-plugin/nativescript-iterable-sdk';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptIterableSdk {
	
}
