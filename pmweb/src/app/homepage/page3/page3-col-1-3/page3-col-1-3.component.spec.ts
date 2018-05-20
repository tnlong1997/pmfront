import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3Col13Component } from './page3-col-1-3.component';

describe('Page3Col13Component', () => {
  let component: Page3Col13Component;
  let fixture: ComponentFixture<Page3Col13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page3Col13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page3Col13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
