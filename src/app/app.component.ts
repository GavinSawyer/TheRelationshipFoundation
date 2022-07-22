import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

import { Subscription, Observable, Subject } from 'rxjs';

@Component({
	selector: 'theRelationshipFoundationApp-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {

	private title: string = 'The Relationship Foundation';
	private description: string = "The Relationship Foundation is a nonprofit focused on the essential role of positive relationships that build resilience and cooperation. Our curriculum has reached thousands of students through workshops, assemblies, and classes.";

	private routerEventsSubscription: Subscription;

	private headerHasImageBehaviorSubject: Subject<boolean> = new Subject()

	constructor(
		ActivatedRoute: ActivatedRoute,
		Router: Router,
		Meta: Meta,
		Title: Title,
		ViewportScroller: ViewportScroller,
	) {
		this
			.routerEventsSubscription = Router
			.events
			.subscribe((): void => ((delve: (activatedRoute: ActivatedRoute, delve: any) => void) => delve(ActivatedRoute, delve))((activatedRoute: ActivatedRoute, delve: (activatedRoute: ActivatedRoute, delve: any) => void): void => {
				setTimeout((): void => {
					ActivatedRoute
						.snapshot
						.fragment && ViewportScroller
						.scrollToAnchor(ActivatedRoute.snapshot.fragment)
				}, 0);

				(activatedRoute.firstChild) ? delve(activatedRoute.firstChild, delve) : ((): void => {
					this
						.headerHasImageBehaviorSubject
						.next(activatedRoute.snapshot.data['headerHasImage']);

					Title
						.setTitle(activatedRoute.snapshot.data['title'] ? this.title + ' – ' + activatedRoute.snapshot.data['title'] : this.title);

					((metaDefinition: MetaDefinition): void => {
						(Meta.getTags("name='description'").length == 0) ? Meta
							.addTag(metaDefinition) : Meta
							.updateTag(metaDefinition);
					})({
						name: "description",
						content: activatedRoute.snapshot.data['description'] ? activatedRoute.snapshot.data['description'] : this.description,
					});
				})();
			}));


	};

	public headerHasImage$: Observable<boolean> = this.headerHasImageBehaviorSubject.asObservable();
}
