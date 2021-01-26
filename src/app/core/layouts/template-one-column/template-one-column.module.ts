import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { TemplateOneColumnComponent } from './template-one-column.component';

@NgModule({
  declarations: [TemplateOneColumnComponent],
  imports: [ CommonModule ],
  exports: [TemplateOneColumnComponent]
})
export class TemplateOneColumnModule {}
