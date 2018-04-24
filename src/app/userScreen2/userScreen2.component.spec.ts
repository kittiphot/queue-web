import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserScreen2Component } from './userScreen2.component';

describe('UserScreen2Component', () => {
  let component: UserScreen2Component;
  let fixture: ComponentFixture<UserScreen2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserScreen2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserScreen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
