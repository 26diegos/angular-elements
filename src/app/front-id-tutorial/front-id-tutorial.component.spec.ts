import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontIdTutorialComponent } from './front-id-tutorial.component';

describe('FrontIdTutorialComponent', () => {
  let component: FrontIdTutorialComponent;
  let fixture: ComponentFixture<FrontIdTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontIdTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontIdTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
