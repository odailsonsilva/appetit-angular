import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OrdersListComponent } from "./orders-list.component";
import { TemplateOneColumnModule } from '../../core/layouts/template-one-column/template-one-column.module';
import { TemplateOneColumnComponent } from "src/app/core/layouts/template-one-column/template-one-column.component";


@NgModule({
  declarations: [
     OrdersListComponent,
     TemplateOneColumnComponent
   ],
  imports: [
    CommonModule,
    TemplateOneColumnModule
  ],
  exports: [ OrdersListComponent ]
})
export class OrdersListModulo {}
