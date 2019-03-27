import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocketPage } from './pocket.page';

describe('PocketPage', () => {
  let component: PocketPage;
  let fixture: ComponentFixture<PocketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PocketPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
