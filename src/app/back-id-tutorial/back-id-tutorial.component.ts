import { Component, Input, OnChanges } from '@angular/core';

@Component({
  templateUrl: './back-id-tutorial.component.html',
  styleUrls: ['./back-id-tutorial.component.css']
})
export class BackIdTutorialComponent implements OnChanges {
  @Input() sdk: any;
  @Input() handleSuccess;

  container;

  ngOnChanges() {
    this.container = document.getElementById('camera-container');

    try {
      this.sdk.renderBackTutorial(this.container, {
        onSuccess: this.handleSuccess
      });
    } catch (e) {
      console.log(e);
    }
  }
}
