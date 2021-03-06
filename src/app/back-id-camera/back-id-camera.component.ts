import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  templateUrl: './back-id-camera.component.html',
  styleUrls: ['./back-id-camera.component.css']
})
export class BackIdCameraComponent implements OnChanges {
  @Input() sdk: any;
  @Input() numberOfTries;
  @Input() permissionMessage;
  @Input() permissionBackgroundColor;

  @Output() logger = new EventEmitter<any>();

  container;

  handleLog(logObject) {
    this.logger.emit(logObject)
  }

  ngOnChanges() {
    this.container = document.getElementById('camera-container');

    this.sdk.renderCamera('back', this.container, {
      onLog: this.handleLog.bind(this),
      numberOfTries: this.numberOfTries,
      permissionMessage: this.permissionMessage,
      permissionBackgroundColor: this.permissionBackgroundColor
    });
  }
}
