import { UploadstepModule } from './uploadstep.module';

describe('UploadstepModule', () => {
  let uploadstepModule: UploadstepModule;

  beforeEach(() => {
    uploadstepModule = new UploadstepModule();
  });

  it('should create an instance', () => {
    expect(uploadstepModule).toBeTruthy();
  });
});
