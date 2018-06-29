import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepitemComponent } from './stepitem.component';

describe('StepitemComponent', () => {
  let component: StepitemComponent;
  let fixture: ComponentFixture<StepitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
