import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page4-col-1-4',
  templateUrl: './page4-col-1-4.component.html',
  styleUrls: ['./page4-col-1-4.component.css']
})
export class Page4Col14Component implements OnInit {
	@Input() title: string;
  @Input() content: string;
  constructor() { }

  ngOnInit() {
  }

}
