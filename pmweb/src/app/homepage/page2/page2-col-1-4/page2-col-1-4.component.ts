import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page2-col-1-4',
  templateUrl: './page2-col-1-4.component.html',
  styleUrls: ['./page2-col-1-4.component.css']
})
export class Page2Col14Component implements OnInit {
	@Input() urlpic: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
