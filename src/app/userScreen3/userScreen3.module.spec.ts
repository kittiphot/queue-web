import { UserScreen3Module } from './userScreen3.module';

describe('UserScreen3Module', () => {
    let userScreen3Module: UserScreen3Module;

    beforeEach(() => {
        userScreen3Module = new UserScreen3Module();
    });

    it('should create an instance', () => {
        expect(userScreen3Module).toBeTruthy();
    });
});
