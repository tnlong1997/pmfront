import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { FrontContentSectionComponent } from './front-page/front-content-section/front-content-section.component';
import { FrontPage1Component } from './front-page/front-content-section/front-page1/front-page1.component';
import { FrontPage2Component } from './front-page/front-content-section/front-page2/front-page2.component';
import { FrontPage3Component } from './front-page/front-content-section/front-page3/front-page3.component';
import { FrontPage4Component } from './front-page/front-content-section/front-page4/front-page4.component';
import { FrontPage5Component } from './front-page/front-page5/front-page5.component';
import { FrontPage6Component } from './front-page/front-page6/front-page6.component';


@NgModule({
  declarations: [
    AppComponent,
		HeaderComponent,
		FrontPageComponent,
		FrontContentSectionComponent,
		FrontPage1Component,
		FrontPage2Component,
		FrontPage3Component,
		FrontPage4Component,
		FrontPage5Component,
		FrontPage6Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
