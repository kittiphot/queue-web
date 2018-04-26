import { Screen1Module } from './Screen1.module';
import { Screen1Component } from './Screen1.component';
import { createQuery } from '@angular/core/src/view/query';



describe('Screen1Module', () => {
    let Screen1Module: Screen1Module;

    beforeEach(() => {
        Screen1Module = new Screen1Module();
    });

    it('should create an instance', () => {
        expect(Screen1Module).toBeTruthy();
    });
   
});
