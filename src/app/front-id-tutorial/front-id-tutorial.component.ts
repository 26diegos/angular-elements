import { Component, Input, OnChanges } from '@angular/core';

@Component({
  templateUrl: './front-id-tutorial.component.html',
  styleUrls: ['./front-id-tutorial.component.css']
})
export class FrontIdTutorialComponent implements OnChanges {
  @Input() sdk: any;
  @Input() handleSuccess;

  container;

  ngOnChanges() {
    this.container = document.getElementById('camera-container');

    try {
      this.sdk.renderFrontTutorial(this.container, {
        onSuccess: this.handleSuccess
      });
    } catch (e) {
      console.log(e);
    }
  }
}
