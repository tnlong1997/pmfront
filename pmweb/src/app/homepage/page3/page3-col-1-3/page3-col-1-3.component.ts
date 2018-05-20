import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page3-col-1-3',
  templateUrl: './page3-col-1-3.component.html',
  styleUrls: ['./page3-col-1-3.component.css']
})
export class Page3Col13Component implements OnInit {
	@Input() title: string;
  @Input() content: string;
  constructor() { }

  ngOnInit() {
  }

}
