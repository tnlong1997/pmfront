import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MnFullpageModule } from 'ngx-fullpage';
import { HomepageComponent } from './homepage/homepage.component';
import { Page1Component } from './homepage/page1/page1.component';
import { Page2Component } from './homepage/page2/page2.component';
import { Page3Component } from './homepage/page3/page3.component';
import { Page4Component } from './homepage/page4/page4.component';
import { Page5Component } from './homepage/page5/page5.component';
import { Page6Component } from './homepage/page6/page6.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PolicyComponent } from './homepage/policy/policy.component';
import { Page2Col14Component } from './homepage/page2/page2-col-1-4/page2-col-1-4.component';
import { Page3Col13Component } from './homepage/page3/page3-col-1-3/page3-col-1-3.component';
import { Page4Col14Component } from './homepage/page4/page4-col-1-4/page4-col-1-4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    Page6Component,
    FooterComponent,
    HeaderComponent,
    PolicyComponent,
    Page2Col14Component,
    Page3Col13Component,
    Page4Col14Component
  ],
  imports: [
    BrowserModule,
		MnFullpageModule.forRoot(),
		RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
