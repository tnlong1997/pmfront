import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPage4Component } from './front-page4.component';

describe('FrontPage4Component', () => {
  let component: FrontPage4Component;
  let fixture: ComponentFixture<FrontPage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontPage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
