import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerProgressBarComponent } from './container-progress-bar.component';

describe('ContainerProgressBarComponent', () => {
  let component: ContainerProgressBarComponent;
  let fixture: ComponentFixture<ContainerProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
