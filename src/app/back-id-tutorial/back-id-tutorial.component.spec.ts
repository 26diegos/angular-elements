import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackIdTutorialComponent } from './back-id-tutorial.component';

describe('BackIdTutorialComponent', () => {
  let component: BackIdTutorialComponent;
  let fixture: ComponentFixture<BackIdTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackIdTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackIdTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
