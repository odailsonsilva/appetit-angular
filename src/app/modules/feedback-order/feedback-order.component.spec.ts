import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackOrderComponent } from './feedback-order.component';

describe('FeedbackOrderComponent', () => {
  let component: FeedbackOrderComponent;
  let fixture: ComponentFixture<FeedbackOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
