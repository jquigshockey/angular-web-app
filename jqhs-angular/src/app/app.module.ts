import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from 'src/material-module';
import { PlayersListComponent } from './players-list/players-list.component';
import { InstructorsListComponent } from './instructors-list/instructors-list.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ManageComponent } from './manage/manage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    PlayersListComponent,
    InstructorsListComponent,
    AddPlayerComponent,
    EditPlayerComponent,
    ScheduleComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
