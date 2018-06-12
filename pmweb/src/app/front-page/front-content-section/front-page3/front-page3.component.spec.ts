import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPage3Component } from './front-page3.component';

describe('FrontPage3Component', () => {
  let component: FrontPage3Component;
  let fixture: ComponentFixture<FrontPage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontPage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
