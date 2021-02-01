import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TemplateTwoColumnsComponent } from "src/app/core/layouts/template-two-columns/template-two-columns.component";
import { CheckoutStoreComponent } from "src/app/shared/components/checkout-store/checkout-store.component";


@NgModule({
  declarations: [
    TemplateTwoColumnsComponent,
    CheckoutStoreComponent
  ],
  imports: [
     CommonModule

  ],
  exports: [ TemplateTwoColumnsComponent ]
})
export class SelectProductModulo { }
