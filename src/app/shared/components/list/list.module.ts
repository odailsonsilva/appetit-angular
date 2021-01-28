import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ItemComponent } from "./item/item.component";
import { ListComponent } from "./list.component";

@NgModule({
  declarations: [ ListComponent, ItemComponent ],
  imports: [ CommonModule ],
  exports: [ ListComponent ]
})
export class ListModule{  }
