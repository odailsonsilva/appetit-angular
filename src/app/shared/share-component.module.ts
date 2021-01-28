import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AvatarModule,
  BtnCtaModule,
  BtnModule,
  CardModule,
  HeaderModule,
  InputModule,
  ProgressBarModule,
  SearchbarModule,
  SideNavModule,
  TopNavModule,
  RadiobtnModule
} from 'dls';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    BtnModule,
    InputModule,
    SideNavModule,
    BtnCtaModule,
    HeaderModule,
    TopNavModule,
    CardModule,
    SearchbarModule,
    AvatarModule,
    ProgressBarModule,
    RadiobtnModule
  ],
  exports: [
    BtnModule,
    InputModule,
    SideNavModule,
    BtnCtaModule,
    HeaderModule,
    TopNavModule,
    CardModule,
    SearchbarModule,
    AvatarModule,
    ProgressBarModule,
    RadiobtnModule
  ]
})
export class ShareComponentModule { }
