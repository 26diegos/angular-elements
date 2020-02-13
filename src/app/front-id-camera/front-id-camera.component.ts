import { Component, OnChanges, Input } from '@angular/core';

@Component({
  templateUrl: './front-id-camera.component.html',
  styleUrls: ['./front-id-camera.component.css']
})
export class FrontIdCameraComponent implements OnChanges {
  @Input() sdk: any;
  @Input() handleSuccess;

  container;

  showError() {
    alert('Some error');
  }

  ngOnChanges() {
    this.container = document.getElementById('camera-container');

    try {
      this.sdk.renderCamera('front', this.container, {
        onSuccess: this.handleSuccess,
        onError: this.showError
      });
    } catch (e) {
      console.log(e);
    }
  }
}
