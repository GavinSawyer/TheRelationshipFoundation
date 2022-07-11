import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexModule } from "@angular/flex-layout";

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,

    FlexModule,

    AboutRoutingModule,
  ],
})
export class AboutModule { }
