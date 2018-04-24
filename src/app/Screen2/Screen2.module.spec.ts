import { Screen2Module } from './Screen2.module';
import { Screen2Component } from './Screen2.component';



describe('Screen2Module', () => {
    let Screen2Module: Screen2Module;

    beforeEach(() => {
        Screen2Module = new Screen2Module();
    });

    it('should create an instance', () => {
        expect(Screen2Module).toBeTruthy();
    });
});
