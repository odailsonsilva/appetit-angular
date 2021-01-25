import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BtnModule, InputModule } from 'dls';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BtnModule,
    InputModule
  ],
  exports: [
    BtnModule,
    InputModule
  ]
})
export class ShareComponentModule { }
