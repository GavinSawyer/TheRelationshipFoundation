import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtendedModule, FlexModule } from "@angular/flex-layout";

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";

import { YouTubePlayerModule } from "@angular/youtube-player";

@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		CommonModule,

		ExtendedModule,
		FlexModule,

		HomeRoutingModule,

		MatButtonModule,
		MatIconModule,
		MatCardModule,

		YouTubePlayerModule,
	]
})
export class HomeModule { }
