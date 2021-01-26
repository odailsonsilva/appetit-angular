import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OrderUserComponent } from "./order-user.component";

@NgModule({
  declarations: [
    OrderUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OrderUserComponent
  ]
})
export class OrderUserModule{}
