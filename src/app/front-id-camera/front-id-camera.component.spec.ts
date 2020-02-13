import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontIdCameraComponent } from './front-id-camera.component';

describe('FrontIdCameraComponent', () => {
  let component: FrontIdCameraComponent;
  let fixture: ComponentFixture<FrontIdCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontIdCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontIdCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
