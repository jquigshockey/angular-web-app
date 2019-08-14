import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { InstructorsListComponent } from './instructors-list/instructors-list.component';
import { ManageComponent } from './manage/manage.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'playerList', component: PlayersListComponent},
  {path: 'editPlayer', component: EditPlayerComponent},
  {path: 'addPlayer', component: AddPlayerComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'instructorsList', component: InstructorsListComponent},
  {path: 'manage', component: ManageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
