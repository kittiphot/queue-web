import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserScreen3Component } from './userScreen3.component';

describe('UserScreen3Component', () => {
  let component: UserScreen3Component;
  let fixture: ComponentFixture<UserScreen3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserScreen3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserScreen3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
