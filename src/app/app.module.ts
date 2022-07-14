import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule, ExtendedModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { initializeApp, provideFirebaseApp, FirebaseApp } from '@angular/fire/app';
import { provideAnalytics, Analytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideAuth, Auth, getAuth } from '@angular/fire/auth';

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";

import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule.withServerTransition({
			appId: 'serverApp',
		}),
		BrowserAnimationsModule,
		AppRoutingModule,

		FlexLayoutModule,
		ExtendedModule,

		provideFirebaseApp((): FirebaseApp => initializeApp(environment.firebase)),
		provideAnalytics((): Analytics => getAnalytics()),
		provideAuth((): Auth => getAuth()),

		MatSidenavModule,
		MatToolbarModule,
		MatMenuModule,
		MatIconModule,
		MatButtonModule,
		MatListModule,
	],
	providers: [
		ScreenTrackingService,
		UserTrackingService,
	],
	bootstrap: [
		AppComponent,
	],
})
export class AppModule { }
