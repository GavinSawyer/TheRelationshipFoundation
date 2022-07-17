import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
		data: {
			title: "Home",
			description: "The Relationship Foundation is...",
			firstSectionHasImage: true,
		},
	},
	{
		path: 'about',
		loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
		data: {
			title: "About",
			description: "Learn about The Relationship Foundation",
			firstSectionHasImage: false,
		},
	},
	{
		path: 'resources',
		loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule),
		data: {
			title: "Resources",
			description: "Download resources",
			firstSectionHasImage: false,
		},
	},
	{
		path: 'contact',
		loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
		data: {
			title: "Contact",
			description: "Contact us",
			firstSectionHasImage: false,
		},
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		initialNavigation: 'enabledBlocking',
		onSameUrlNavigation: 'reload',
		scrollPositionRestoration: 'enabled',
		anchorScrolling: 'enabled',
		scrollOffset: [0, 32],
	})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
