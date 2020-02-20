import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  templateUrl: './front-id-camera.component.html',
  styleUrls: ['./front-id-camera.component.css']
})
export class FrontIdCameraComponent implements OnChanges {
  @Input() sdk: any;
  @Input() handleSuccess;
  @Input() handleError;
  @Input() numberOfTries;

  @Output() logger = new EventEmitter<any>();

  container;

  handleLog(logObject) {
    this.logger.emit(logObject)
  }

  ngOnChanges() {
    this.container = document.getElementById('camera-container');

    this.sdk.renderCamera('front', this.container, {
      onLog: this.handleLog.bind(this),
      numberOfTries: this.numberOfTries
    });
  }
}
