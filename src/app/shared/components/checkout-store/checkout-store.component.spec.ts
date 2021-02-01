import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutStoreComponent } from './checkout-store.component';

describe('CheckoutStoreComponent', () => {
  let component: CheckoutStoreComponent;
  let fixture: ComponentFixture<CheckoutStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
