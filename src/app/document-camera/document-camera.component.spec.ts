import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentCameraComponent } from './document-camera.component';

describe('DocumentCameraComponent', () => {
  let component: DocumentCameraComponent;
  let fixture: ComponentFixture<DocumentCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
