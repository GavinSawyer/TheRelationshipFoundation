import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

import { filter, map } from 'rxjs/operators'

@Component({
	selector: 'theRelationshipFoundationApp-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

	title: string = 'The Relationship Foundation';
	description: string = "The Relationship Foundation is a nonprofit focused on the essential role of positive relationships that build resilience and cooperation. Our curriculum has reached thousands of students through workshops, assemblies, and classes.";

	constructor(
		private ActivatedRoute: ActivatedRoute,
		private Router: Router,
		private Meta: Meta,
		private Title: Title,
	) {};

	ngOnInit(): void {
		this
			.Router
			.events
			.pipe(
				filter((value): boolean => (value instanceof NavigationEnd)),
				map((): ActivatedRoute => this.ActivatedRoute),
			)
			.subscribe((activatedRoute: ActivatedRoute): void => {
				((delve: (activatedRoute: ActivatedRoute, delve: any) => void) => {
					delve(activatedRoute, delve);
				})((activatedRoute: ActivatedRoute, delve: (activatedRoute: ActivatedRoute, delve: any) => void): void => {
					(activatedRoute.firstChild) ? delve(activatedRoute.firstChild, delve) : ((): void => {
						this
							.Title
							.setTitle(activatedRoute.snapshot.data['title'] ? this.title + ' – ' + activatedRoute.snapshot.data['title'] : this.title);

						((metaDefinition: MetaDefinition): void => {
							(this.Meta.getTags("name='description'").length == 0) ? this
								.Meta
								.addTag(metaDefinition) : this
								.Meta
								.updateTag(metaDefinition);
						})({
							name: "description",
							content: activatedRoute.snapshot.data['description'] ? activatedRoute.snapshot.data['description'] : this.description,
						});
					})();
				});
			});
	};
}
