import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtendedModule, FlexModule } from "@angular/flex-layout";

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";


@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		CommonModule,
		FlexModule,
		HomeRoutingModule,
		ExtendedModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
	]
})
export class HomeModule { }
