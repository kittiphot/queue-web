import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintqueueComponent } from './Printqueue.component';

describe('PrintqueueComponent', () => {
  let component: PrintqueueComponent;
  let fixture: ComponentFixture<PrintqueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintqueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
