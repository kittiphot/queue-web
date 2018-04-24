import { QueueScreenModule } from './queueScreen.module';

describe('queueScreenModule', () => {
    let queueScreenModule: QueueScreenModule;

    beforeEach(() => {
        queueScreenModule = new QueueScreenModule();
    });

    it('should create an instance', () => {
        expect(queueScreenModule).toBeTruthy();
    });
});
