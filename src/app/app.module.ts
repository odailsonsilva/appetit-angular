import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { ShareComponentModule } from './shared/share-component.module';
import { OrdersListComponent } from './modules/orders-list/orders-list.component';
import { TemplateOneColumnComponent } from './core/layouts/template-one-column/template-one-column.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    OrdersListComponent,
    TemplateOneColumnComponent
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
