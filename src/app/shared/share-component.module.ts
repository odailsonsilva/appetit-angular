import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BtnCtaModule,
  BtnModule,
  CardModule,
  HeaderModule,
  InputModule,
  SearchbarModule,
  SideNavModule,
  TopNavModule
} from 'dls';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BtnModule,
    InputModule,
    SideNavModule,
    BtnCtaModule,
    HeaderModule,
    TopNavModule,
    CardModule,
    SearchbarModule
  ],
  exports: [
    BtnModule,
    InputModule,
    SideNavModule,
    BtnCtaModule,
    HeaderModule,
    TopNavModule,
    CardModule,
    SearchbarModule
  ]
})
export class ShareComponentModule { }
