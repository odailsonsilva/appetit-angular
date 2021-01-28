import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTwoColumnsComponent } from './template-two-columns.component';

describe('TemplateTwoColumnsComponent', () => {
  let component: TemplateTwoColumnsComponent;
  let fixture: ComponentFixture<TemplateTwoColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateTwoColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTwoColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
