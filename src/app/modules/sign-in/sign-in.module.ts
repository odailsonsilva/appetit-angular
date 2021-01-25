import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BtnModule } from 'dls';


import { SignInComponent } from './sign-in.component';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    BtnModule,
  ],
  exports: [
    SignInComponent,
  ],
})
export class SignInModule {}
