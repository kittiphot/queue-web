import { SettingsModule } from './settings.module';

describe('settingsModule', () => {
  let settingsModule: SettingsModule;

  beforeEach(() => {
    settingsModule = new SettingsModule();
  });

  it('should create an instance', () => {
    expect(settingsModule).toBeTruthy();
  });
});
