import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InputModule, BtnModule } from "dls";

import { SignInComponent } from './sign-in.component';

@NgModule({
  declarations: [
    SignInComponent
  ],
  exports: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    BtnModule
  ]
})
export class SignInModule {}
