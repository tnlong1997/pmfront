import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPage6Component } from './front-page6.component';

describe('FrontPage6Component', () => {
  let component: FrontPage6Component;
  let fixture: ComponentFixture<FrontPage6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontPage6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPage6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
