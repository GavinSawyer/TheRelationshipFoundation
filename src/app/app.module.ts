import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { initializeApp, provideFirebaseApp, FirebaseApp } from '@angular/fire/app';
import { provideAnalytics, Analytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideAuth, Auth, getAuth } from '@angular/fire/auth';

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
