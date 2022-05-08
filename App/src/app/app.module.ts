import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modules
import {AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

//Components
import { environment} from 'src/environments/environment';
import { AppComponent } from './app.component';
import { RoutineComponent } from './components/routine/routine.component';
import { RoutinesComponent } from './components/routines/routines.component';
import { CreateRoutineComponent } from './components/create-routine/create-routine.component';
import { CreateClaseComponent } from './components/create-clase/create-clase.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ClasesComponent } from './components/clases/clases.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutineComponent,
    RoutinesComponent,
    CreateRoutineComponent,
    CreateClaseComponent,  
    HomeComponent,
    LoginComponent,
    SingupComponent,
    ProfileComponent,
    ClasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
