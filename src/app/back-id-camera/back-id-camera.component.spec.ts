import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackIdCameraComponent } from './back-id-camera.component';

describe('BackIdCameraComponent', () => {
  let component: BackIdCameraComponent;
  let fixture: ComponentFixture<BackIdCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackIdCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackIdCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
