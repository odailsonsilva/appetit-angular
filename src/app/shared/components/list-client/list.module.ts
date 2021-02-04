import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ItemComponent } from "./item/item.component";
import { ListClientComponent } from "./list.component";

@NgModule({
  declarations: [ ListClientComponent, ItemComponent ],
  imports: [ CommonModule ],
  exports: [ ListClientComponent ]
})
export class ListClientModule{  }
