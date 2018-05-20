import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2Col14Component } from './page2-col-1-4.component';

describe('Page2Col14Component', () => {
  let component: Page2Col14Component;
  let fixture: ComponentFixture<Page2Col14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2Col14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2Col14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
