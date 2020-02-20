import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-selfie-camera',
  templateUrl: './selfie-camera.component.html',
  styleUrls: ['./selfie-camera.component.css']
})
export class SelfieCameraComponent implements OnChanges {
  @Input() sdk: any;
  @Input() handleSuccess;
  @Input() handleError;
  @Input() numberOfTries;

  container;

  ngOnChanges() {
    this.container = document.getElementById('camera-container');

    try {
      this.sdk.renderCamera('selfie', this.container, {
        onSuccess: this.handleSuccess,
        onError: this.handleError,
        numberOfTries: this.numberOfTries
      });
    } catch (e) {
      console.log(e);
    }
  }
}
