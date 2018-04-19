import { QueueModule } from './queue.module';

describe('queueModule', () => {
  let queueModule: QueueModule;

  beforeEach(() => {
    queueModule = new QueueModule();
  });

  it('should create an instance', () => {
    expect(queueModule).toBeTruthy();
  });
});
