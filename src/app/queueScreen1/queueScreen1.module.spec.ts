import { QueueScreen1Module } from './queueScreen1.module';

describe('queueScreen1Module', () => {
    let queueScreen1Module: QueueScreen1Module;

    beforeEach(() => {
        queueScreen1Module = new QueueScreen1Module();
    });

    it('should create an instance', () => {
        expect(queueScreen1Module).toBeTruthy();
    });
});
