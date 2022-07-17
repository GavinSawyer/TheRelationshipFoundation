import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

import { Observable, Subject } from 'rxjs';

@Component({
	selector: 'theRelationshipFoundationApp-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

	private title: string = 'The Relationship Foundation';
	private description: string = "The Relationship Foundation is a nonprofit focused on the essential role of positive relationships that build resilience and cooperation. Our curriculum has reached thousands of students through workshops, assemblies, and classes.";

	private firstSectionHasImageBehaviorSubject: Subject<boolean> = new Subject()

	constructor(
		private ActivatedRoute: ActivatedRoute,
		private Router: Router,
		private Meta: Meta,
		private Title: Title,
	) {};

	public firstSectionHasImage$: Observable<boolean> = this.firstSectionHasImageBehaviorSubject.asObservable();

	ngOnInit(): void {
		this
			.Router
			.events
			.subscribe((): void => ((delve: (activatedRoute: ActivatedRoute, delve: any) => void) => delve(this.ActivatedRoute, delve))((activatedRoute: ActivatedRoute, delve: (activatedRoute: ActivatedRoute, delve: any) => void): void => {
				(activatedRoute.firstChild) ? delve(activatedRoute.firstChild, delve) : ((): void => {
					this
						.firstSectionHasImageBehaviorSubject
						.next(activatedRoute.snapshot.data['firstSectionHasImage']);

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
			}));
	};
}
