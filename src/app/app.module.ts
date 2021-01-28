import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { ShareComponentModule } from './shared/share-component.module';
import { OrdersListComponent } from './modules/orders-list/orders-list.component';
import { TemplateOneColumnComponent } from './core/layouts/template-one-column/template-one-column.component';
import { TemplateTwoColumnsComponent } from './core/layouts/template-two-columns/template-two-columns.component';
import { OrderUserComponent } from './modules/order-user/order-user.component';
import { SelectProductComponent } from './modules/select-product/select-product.component';
import { StoreComponent } from './shared/components/store/store.component';
import { ContainerProgressBarComponent } from './shared/components/container-progress-bar/container-progress-bar.component';
import { ListComponent } from './shared/components/list/list.component';
import { ItemComponent } from './shared/components/list/item/item.component';
import { DetailsProductComponent } from './modules/details-product/details-product.component';
import { DetailsComponent } from './shared/components/details/details.component';
import { AddProductComponent } from './shared/components/details/add-product/add-product.component';
import { FeedbackOrderComponent } from './modules/feedback-order/feedback-order.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    OrdersListComponent,
    TemplateOneColumnComponent,
    TemplateTwoColumnsComponent,
    OrderUserComponent,
    SelectProductComponent,
    StoreComponent,
    ContainerProgressBarComponent,
    ListComponent,
    ItemComponent,
    DetailsProductComponent,
    DetailsComponent,
    AddProductComponent,
    FeedbackOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
