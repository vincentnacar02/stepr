import { StepboardModule } from './stepboard.module';

describe('StepboardModule', () => {
  let stepboardModule: StepboardModule;

  beforeEach(() => {
    stepboardModule = new StepboardModule();
  });

  it('should create an instance', () => {
    expect(stepboardModule).toBeTruthy();
  });
});
