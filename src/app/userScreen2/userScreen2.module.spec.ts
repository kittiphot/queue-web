import { UserScreen2Module } from './userScreen2.module';

describe('UserScreenModule', () => {
    let userScreen2Module: UserScreen2Module;

    beforeEach(() => {
        userScreen2Module = new UserScreen2Module();
    });

    it('should create an instance', () => {
        expect(userScreen2Module).toBeTruthy();
    });
});
