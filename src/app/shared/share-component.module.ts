import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BtnCtaModule,
  BtnModule,
  InputModule,
  SideNavModule
} from 'dls';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BtnModule,
    InputModule,
    SideNavModule,
    BtnCtaModule
  ],
  exports: [
    BtnModule,
    InputModule,
    SideNavModule,
    BtnCtaModule
  ]
})
export class ShareComponentModule { }
