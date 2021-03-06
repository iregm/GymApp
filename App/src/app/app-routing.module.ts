import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RoutinesComponent } from './components/routines/routines.component';
import { RoutineComponent } from './components/routine/routine.component';
import { CreateRoutineComponent } from './components/create-routine/create-routine.component';
import { CreateClaseComponent } from './components/create-clase/create-clase.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ClasesComponent } from './components/clases/clases.component';
import { FormWorkoutComponent } from './components/form-workout/form-workout.component';

const routes : Routes = [

  {path: '', component: LoginComponent},
  {path: 'singup', component: SingupComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'workouts/:id', component: FormWorkoutComponent},
  {path: 'routines', component: RoutinesComponent},
  {path: 'routine/:id', component: RoutineComponent},
  {path: 'createRoutine', component: CreateRoutineComponent},
  {path: 'createClase', component: CreateClaseComponent},
  {path: 'clases', component: ClasesComponent},
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
