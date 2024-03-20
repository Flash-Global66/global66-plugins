import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptIterableSdk } from '@demo/shared';
import { } from '@global66-plugin/nativescript-iterable-sdk';

@Component({
	selector: 'demo-nativescript-iterable-sdk',
	templateUrl: 'nativescript-iterable-sdk.component.html',
})
export class NativescriptIterableSdkComponent {
  
  demoShared: DemoSharedNativescriptIterableSdk;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptIterableSdk();
  }

}