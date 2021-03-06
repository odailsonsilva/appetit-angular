import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  StoreModule } from '@ngrx/store';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

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
import { cartReducer } from './shared/store/store.reducer';
import { CheckoutStoreComponent } from './shared/components/checkout-store/checkout-store.component';
import { SelectClientComponent } from './modules/select-client/select-client.component';
import { ListClientComponent } from './shared/components/list-client/list.component';
import { FinishOrderComponent } from './modules/finish-order/finish-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    FeedbackOrderComponent,
    CheckoutStoreComponent,
    SelectClientComponent,
    ListClientComponent,
    AddProductComponent,
    FinishOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareComponentModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forRoot({
      cart: cartReducer
    }),
    BrowserAnimationsModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
