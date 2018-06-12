import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontContentSectionComponent } from './front-content-section.component';

describe('FrontContentSectionComponent', () => {
  let component: FrontContentSectionComponent;
  let fixture: ComponentFixture<FrontContentSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontContentSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontContentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
