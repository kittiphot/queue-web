import { ScreenModule } from './Screen.module';
import { ScreenRoutingModule } from './Screen-routing.module';

describe('screenModule', () => {
    let screenModule: ScreenModule;

    beforeEach(() => {
        screenModule = new ScreenModule();
    });

    it('should create an instance', () => {
        expect(screenModule).toBeTruthy();
    });
});
