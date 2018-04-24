import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueScreenComponent } from './queueScreen.component';

describe('QueueScreenComponent', () => {
    let component: QueueScreenComponent;
    let fixture: ComponentFixture<QueueScreenComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [QueueScreenComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(QueueScreenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
