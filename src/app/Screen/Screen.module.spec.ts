import { ScreenModule } from './Screen.module';
import { ScreenRoutingModule } from './Screen-routing.module';

describe('ScreenModule', () => {
    let ScreenModule: ScreenModule;

    beforeEach(() => {
        ScreenModule = new ScreenModule();
    });

    it('should create an instance', () => {
        expect(ScreenModule).toBeTruthy();
    });
});
