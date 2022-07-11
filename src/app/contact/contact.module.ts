import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexModule } from "@angular/flex-layout";

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    CommonModule,

    FlexModule,

    ContactRoutingModule,
  ],
})
export class ContactModule { }
