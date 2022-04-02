import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RoutinesComponent } from './components/routines/routines.component';
import { RoutineComponent } from './components/routine/routine.component';
import { CreateRoutineComponent } from './components/create-routine/create-routine.component';

const routes : Routes = [
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
