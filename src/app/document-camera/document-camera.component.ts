import { Component, Input, OnChanges } from '@angular/core';

@Component({
  templateUrl: './document-camera.component.html',
  styleUrls: ['./document-camera.component.css']
})
export class DocumentCameraComponent implements OnChanges {
  @Input() sdk: any;
  @Input() handleSuccess;
  @Input() handleError;

  container;

  ngOnChanges() {
    this.container = document.getElementById('camera-container');

    try {
      this.sdk.renderCamera('document', this.container, {
        onSuccess: this.handleSuccess,
        onError: this.handleError
      });
    } catch (e) {
      console.log(e);
    }
  }
}
