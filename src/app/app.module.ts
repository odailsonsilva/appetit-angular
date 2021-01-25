import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { ShareComponentModule } from './shared/share-component.module';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent
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
