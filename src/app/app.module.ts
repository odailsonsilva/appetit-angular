import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { ShareComponentModule } from './shared/share-component.module';
import { OrdersListComponent } from './modules/orders-list/orders-list.component';
import { TemplateOneColumnComponent } from './core/layouts/template-one-column/template-one-column.component';
import { OrderUserComponent } from './modules/order-user/order-user.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    OrdersListComponent,
    TemplateOneColumnComponent,
    OrderUserComponent
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
