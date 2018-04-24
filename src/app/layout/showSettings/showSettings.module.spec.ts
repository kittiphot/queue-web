import { ShowSettingsModule } from './showSettings.module';

describe('ShowSettingsModule', () => {
  let showSettingsModule: ShowSettingsModule;

  beforeEach(() => {
    showSettingsModule = new ShowSettingsModule();
  });

  it('should create an instance', () => {
    expect(showSettingsModule).toBeTruthy();
  });
});
