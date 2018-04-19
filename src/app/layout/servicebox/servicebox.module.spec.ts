import { ServiceboxModule } from './servicebox.module';

describe('ServiceboxModule', () => {
  let ServiceboxModule: ServiceboxModule;

  beforeEach(() => {
    ServiceboxModule = new ServiceboxModule();
  });

  it('should create an instance', () => {
    expect(ServiceboxModule).toBeTruthy();
  });
});
