import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { search, bell, wrench, personCircle } from 'ngx-bootstrap-icons';

const icons = {
  search,
  bell,
  wrench,
  personCircle

};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapseModule,
    NgxNavbarModule,
    NgxBootstrapIconsModule.pick(icons, {
      width: '1.1em',
      height: '1.1em',

    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
