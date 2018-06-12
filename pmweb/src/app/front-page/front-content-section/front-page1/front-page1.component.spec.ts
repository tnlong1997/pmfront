import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPage1Component } from './front-page1.component';

describe('FrontPage1Component', () => {
  let component: FrontPage1Component;
  let fixture: ComponentFixture<FrontPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
