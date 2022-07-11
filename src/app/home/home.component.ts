import { Component, OnInit } from '@angular/core';

let hasLoadedYouTubeIFrameAPI: boolean = false;

@Component({
	selector: 'theRelationshipFoundationApp-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
		(!hasLoadedYouTubeIFrameAPI) && ((htmlScriptElement: HTMLScriptElement): void => {
			htmlScriptElement
				.src = "https://youtube.com/iframe_api/";

			document
				.body
				.appendChild(htmlScriptElement);

			hasLoadedYouTubeIFrameAPI = true;
		})(document.createElement("script"));
	}

}
