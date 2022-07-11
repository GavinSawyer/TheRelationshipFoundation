import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexModule } from "@angular/flex-layout";

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';

@NgModule({
  declarations: [
    ResourcesComponent,
  ],
  imports: [
    CommonModule,

    FlexModule,

    ResourcesRoutingModule,
  ],
})
export class ResourcesModule { }
