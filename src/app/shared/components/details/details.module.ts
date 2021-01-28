import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DetailsComponent } from "./details.component";
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [ DetailsComponent, AddProductComponent ],
  imports: [ CommonModule ],
  exports: [ DetailsComponent, AddProductComponent ]
})
export class DetailsModules {  }
