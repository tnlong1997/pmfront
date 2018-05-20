import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MnFullpageOptions } from 'ngx-fullpage';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
	public isVisible : boolean;

	@Input() public options: MnFullpageOptions = new MnFullpageOptions({
        controlArrows: true,
        scrollingSpeed: 700,

        menu: '.menu',
        css3: true,
        anchors: [
            'menuAnchor1', 'menuAnchor2', 'menuAnchor3',
            'menuAnchor4', 'menuAnchor5', 'menuAnchor6'
        ]
				// afterLoad: function(anchorLink, index) {
				// 	if(anchorLink == 'menuAnchor1'){
				// 		this.isVisible = true;
				// 	}
				// 	else{
				// 		this.isVisible = false;
				// 	}
				// 	console.log(this.isVisible)
				// }
    });


  constructor() {
	};

  ngOnInit() {
	};
}
