import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoutineComponent } from './components/routine/routine.component';
import { RoutinesComponent } from './components/routines/routines.component';

import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    RoutineComponent,
    RoutinesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
