import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sandeep1Component } from './sandeep1.component';

describe('Sandeep1Component', () => {
  let component: Sandeep1Component;
  let fixture: ComponentFixture<Sandeep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sandeep1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sandeep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
