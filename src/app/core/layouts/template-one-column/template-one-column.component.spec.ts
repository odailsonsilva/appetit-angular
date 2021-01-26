import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateOneColumnComponent } from './template-one-column.component';

describe('TemplateOneColumnComponent', () => {
  let component: TemplateOneColumnComponent;
  let fixture: ComponentFixture<TemplateOneColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateOneColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateOneColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
