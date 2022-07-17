import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexModule, ExtendedModule } from "@angular/flex-layout";

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,

    FlexModule,
    ExtendedModule,

    AboutRoutingModule,

    MatDividerModule,
    MatListModule,
  ],
})
export class AboutModule { }
