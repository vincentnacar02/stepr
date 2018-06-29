import { SteplistModule } from './steplist.module';

describe('SteplistModule', () => {
  let steplistModule: SteplistModule;

  beforeEach(() => {
    steplistModule = new SteplistModule();
  });

  it('should create an instance', () => {
    expect(steplistModule).toBeTruthy();
  });
});
