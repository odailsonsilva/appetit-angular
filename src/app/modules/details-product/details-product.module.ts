import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AddProductComponent } from "src/app/shared/components/details/add-product/add-product.component";
import { DetailsProductComponent } from "./details-product.component";

@NgModule({
  declarations: [
    DetailsProductComponent,
    AddProductComponent
   ],
  imports: [ CommonModule ],
  exports: [ DetailsProductComponent ]
})
export class DetailsProductModule {  }
