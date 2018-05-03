import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueScreen1Component } from './queueScreen1.component';

describe('QueueScreen1Component', () => {
    let component: QueueScreen1Component;
    let fixture: ComponentFixture<QueueScreen1Component>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [QueueScree1nComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(QueueScreen1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
