import { StaffScreenModule } from './staffScreen.module';

describe('StaffScreenModule', () => {
    let staffScreenModule: StaffScreenModule;

    beforeEach(() => {
        staffScreenModule = new StaffScreenModule();
    });

    it('should create an instance', () => {
        expect(staffScreenModule).toBeTruthy();
    });
});
