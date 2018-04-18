import { StaffModule } from './staff.module';

describe('staffModule', () => {
  let staffModule: StaffModule;

  beforeEach(() => {
    staffModule = new StaffModule();
  });

  it('should create an instance', () => {
    expect(staffModule).toBeTruthy();
  });
});
