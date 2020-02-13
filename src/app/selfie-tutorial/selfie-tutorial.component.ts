import { Component, OnChanges, Input } from '@angular/core';

@Component({
  templateUrl: './selfie-tutorial.component.html',
  styleUrls: ['./selfie-tutorial.component.css']
})
export class SelfieTutorialComponent implements OnChanges {
  @Input() sdk: any;
  @Input() handleSuccess;

  container;

  ngOnChanges() {
    this.container = document.getElementById('camera-container');

    try {
      this.sdk.renderSelfieTutorial(this.container, {
        onSuccess: this.handleSuccess
      });
    } catch (e) {
      console.log(e);
    }
  }
}
