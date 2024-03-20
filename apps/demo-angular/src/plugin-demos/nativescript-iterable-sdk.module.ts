import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptIterableSdkComponent } from './nativescript-iterable-sdk.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptIterableSdkComponent }])],
  declarations: [NativescriptIterableSdkComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptIterableSdkModule {}
