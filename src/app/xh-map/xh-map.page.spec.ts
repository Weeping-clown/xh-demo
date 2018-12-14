import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XhMapPage } from './xh-map.page';

describe('XhMapPage', () => {
  let component: XhMapPage;
  let fixture: ComponentFixture<XhMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XhMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XhMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
