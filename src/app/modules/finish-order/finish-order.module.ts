import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { FinishOrderComponent } from "./finish-order.component";
import { HeaderDatepickerComponent } from './header-datepicker/header-datepicker.component';

@NgModule({
  declarations: [ FinishOrderComponent, HeaderDatepickerComponent ],
  imports: [ CommonModule, MatDatepickerModule ],
  exports: [ FinishOrderComponent ]
})
export class FinishOrderModule {  }
