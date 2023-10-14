import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Principiante1Component } from './principiante1.component';

describe('Principiante1Component', () => {
  let component: Principiante1Component;
  let fixture: ComponentFixture<Principiante1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Principiante1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Principiante1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
