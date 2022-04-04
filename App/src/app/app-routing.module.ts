import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RoutinesComponent } from './components/routines/routines.component';
import { RoutineComponent } from './components/routine/routine.component';
import { CreateRoutineComponent } from './components/create-routine/create-routine.component';
import { HomeComponent } from './components/home/home.component';

const routes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'routines', component: RoutinesComponent},
  {path: 'routine', component: RoutineComponent},
  {path: 'createRoutine', component: CreateRoutineComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }
