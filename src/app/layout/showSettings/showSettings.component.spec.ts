import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSettingsComponent } from './showSettings.component';

describe('ShowSettingsComponent', () => {
  let component: ShowSettingsComponent;
  let fixture: ComponentFixture<ShowSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
