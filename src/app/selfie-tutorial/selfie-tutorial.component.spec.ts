import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfieTutorialComponent } from './selfie-tutorial.component';

describe('SelfieTutorialComponent', () => {
  let component: SelfieTutorialComponent;
  let fixture: ComponentFixture<SelfieTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfieTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfieTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
