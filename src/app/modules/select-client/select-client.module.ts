import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListClientComponent } from "src/app/shared/components/list-client/list.component";
import { SelectProductComponent } from "../select-product/select-product.component";

@NgModule({
  declarations: [
    SelectProductComponent,
    ListClientComponent
  ],
  imports: [ CommonModule ],
  exports: [ SelectProductComponent ]
})
export class SelectClientModule {  }
