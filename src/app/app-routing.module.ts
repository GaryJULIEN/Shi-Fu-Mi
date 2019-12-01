import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OptionsComponent } from './options/options.component';
import { NewGameComponent } from './new-game/new-game.component';
import { LoadGameComponent } from './load-game/load-game.component';


const routes: Routes = [
   
  
  {
    path: 'options',
    component: OptionsComponent
  },
  {
    path: 'new-game',
    component: NewGameComponent
  },
  {
    path: 'load-game',
    component: LoadGameComponent
  },
  {
    path: '',
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
