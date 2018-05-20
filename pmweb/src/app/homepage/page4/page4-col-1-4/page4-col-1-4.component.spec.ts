import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page4Col14Component } from './page4-col-1-4.component';

describe('Page4Col14Component', () => {
  let component: Page4Col14Component;
  let fixture: ComponentFixture<Page4Col14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page4Col14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page4Col14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
