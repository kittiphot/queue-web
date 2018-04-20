import { UserScreenModule } from './userScreen.module';

describe('UserScreenModule', () => {
    let userScreenModule: UserScreenModule;

    beforeEach(() => {
        userScreenModule = new UserScreenModule();
    });

    it('should create an instance', () => {
        expect(userScreenModule).toBeTruthy();
    });
});
