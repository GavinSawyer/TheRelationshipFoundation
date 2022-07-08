import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { initializeApp, provideFirebaseApp, FirebaseApp } from '@angular/fire/app';
import { provideAnalytics, Analytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideAuth, Auth, getAuth } from '@angular/fire/auth';

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule.withServerTransition({
			appId: 'serverApp',
		}),
		AppRoutingModule,
		provideFirebaseApp((): FirebaseApp => initializeApp(environment.firebase)),
		provideAnalytics((): Analytics => getAnalytics()),
		provideAuth((): Auth => getAuth()),
		BrowserAnimationsModule,

		FlexLayoutModule,

		MatSidenavModule,
		MatToolbarModule,
		MatButtonModule,
	],
	providers: [
		ScreenTrackingService,
		UserTrackingService,
	],
	bootstrap: [
		AppComponent,
	]
})
export class AppModule { }
