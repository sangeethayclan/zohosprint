import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { search, bell, wrench, personCircle, laptopFill, fileBarGraph, bookHalf, sticky, cursor, layoutThreeColumns, graphUp } from 'ngx-bootstrap-icons';
import { NotificationComponent } from './notification/notification.component';
import { UpgrateComponent } from './upgrate/upgrate.component';
import { SidetabComponent } from './sidetab/sidetab.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedComponent } from './feed/feed.component';
import { BacklogComponent } from './backlog/backlog.component';
import { EpicsComponent } from './epics/epics.component';
import { ReleaseComponent } from './release/release.component';
import { ReportsComponent } from './reports/reports.component';
import { BoardComponent } from './board/board.component';
import { HomeComponent } from './home/home.component';

const icons = {
  search,
  bell,
  wrench,
  personCircle,
  laptopFill,
  fileBarGraph,
  bookHalf,
  sticky,
  cursor,
  layoutThreeColumns,
  graphUp,


};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotificationComponent,
    UpgrateComponent,
    SidetabComponent,
    DashboardComponent,
    FeedComponent,
    BacklogComponent,
    EpicsComponent,
    ReleaseComponent,
    ReportsComponent,
    BoardComponent,
    HomeComponent
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
