import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPage5Component } from './front-page5.component';

describe('FrontPage5Component', () => {
  let component: FrontPage5Component;
  let fixture: ComponentFixture<FrontPage5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontPage5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
