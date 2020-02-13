import { Component, Input, OnChanges } from '@angular/core';

@Component({
  templateUrl: './back-id-camera.component.html',
  styleUrls: ['./back-id-camera.component.css']
})
export class BackIdCameraComponent implements OnChanges {
  @Input() sdk: any;
  @Input() handleSuccess;
  @Input() handleError;

  container;

  ngOnChanges() {
    this.container = document.getElementById('camera-container');

    try {
      this.sdk.renderCamera('back', this.container, {
        onSuccess: this.handleSuccess,
        onError: this.handleError
      });
    } catch (e) {
      console.log(e);
    }
  }
}
