import { DisplayScreenModule } from './displayScreen.module';

describe('displayScreenModule', () => {
  let displayScreenModule: DisplayScreenModule;

  beforeEach(() => {
    displayScreenModule = new DisplayScreenModule();
  });

  it('should create an instance', () => {
    expect(displayScreenModule).toBeTruthy();
  });
});
