import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteplistComponent } from './steplist.component';

describe('SteplistComponent', () => {
  let component: SteplistComponent;
  let fixture: ComponentFixture<SteplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
