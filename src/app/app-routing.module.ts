import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BacklogComponent } from './backlog/backlog.component';
import { BoardComponent } from './board/board.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EpicsComponent } from './epics/epics.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { ReleaseComponent } from './release/release.component';
import { ReportsComponent } from './reports/reports.component';
import { UpgrateComponent } from './upgrate/upgrate.component';

const routes: Routes = [
  { path: "upgrate", component: UpgrateComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "backlog", component: BacklogComponent },
  { path: "board", component: BoardComponent },
  { path: "epics", component: EpicsComponent },
  { path: "feed", component: FeedComponent },
  { path: "release", component: ReleaseComponent },
  { path: "reports", component: ReportsComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
