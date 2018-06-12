import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-front-content-section',
	templateUrl: './front-content-section.component.html',
	styleUrls: ['./front-content-section.component.css']
})
export class FrontContentSectionComponent implements OnInit {
	selectedItem : string;
	constructor() { }
	
	ngOnInit() {
		this.selectedItem = "item1";
	}

}
