import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffScreenComponent } from './staffScreen.component';

describe('StaffScreenComponent', () => {
  let component: StaffScreenComponent;
  let fixture: ComponentFixture<StaffScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
