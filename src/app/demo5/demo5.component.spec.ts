/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Demo5Component } from './demo5.component';

describe('Demo5Component', () => {
  let component: Demo5Component;
  let fixture: ComponentFixture<Demo5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
