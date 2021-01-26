import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
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
    SideNavModule
  ],
  exports: [
    BtnModule,
    InputModule,
    SideNavModule
  ]
})
export class ShareComponentModule { }
