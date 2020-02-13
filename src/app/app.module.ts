import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { FrontIdTutorialComponent } from './front-id-tutorial/front-id-tutorial.component';
import { FrontIdCameraComponent } from './front-id-camera/front-id-camera.component';
import { BackIdTutorialComponent } from './back-id-tutorial/back-id-tutorial.component';
import { BackIdCameraComponent } from './back-id-camera/back-id-camera.component';
import { DocumentCameraComponent } from './document-camera/document-camera.component';
import { SelfieTutorialComponent } from './selfie-tutorial/selfie-tutorial.component';
import { SelfieCameraComponent } from './selfie-camera/selfie-camera.component';

@NgModule({
  declarations: [
    FrontIdTutorialComponent,
    FrontIdCameraComponent,
    BackIdTutorialComponent,
    BackIdCameraComponent,
    DocumentCameraComponent,
    SelfieTutorialComponent,
    SelfieCameraComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    FrontIdTutorialComponent,
    FrontIdCameraComponent,
    BackIdTutorialComponent,
    BackIdCameraComponent,
    DocumentCameraComponent,
    SelfieTutorialComponent,
    SelfieCameraComponent
  ],
  providers: []
})
export class AppModule {
  constructor(injector: Injector) {
    const frontIdTutorial = createCustomElement(FrontIdTutorialComponent, {injector});
    customElements.define('front-id-tutorial', frontIdTutorial);

    const frontIdCamera = createCustomElement(FrontIdCameraComponent, {injector});
    customElements.define('front-id-camera', frontIdCamera);

    const backIdTutorial = createCustomElement(BackIdTutorialComponent, {injector});
    customElements.define('back-id-tutorial', backIdTutorial);

    const backIdCamera = createCustomElement(BackIdCameraComponent, {injector});
    customElements.define('back-id-camera', backIdCamera);

    const documentCamera = createCustomElement(DocumentCameraComponent, {injector});
    customElements.define('document-camera', documentCamera);

    const selfieTutorial = createCustomElement(SelfieTutorialComponent, {injector});
    customElements.define('selfie-tutorial', selfieTutorial);

    const selfieCamera = createCustomElement(SelfieCameraComponent, {injector});
    customElements.define('selfie-camera', selfieCamera);
  }
  ngDoBootstrap() {}
 }
