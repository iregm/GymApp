import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoutineComponent } from './components/routine/routine.component';
import { RoutinesComponent } from './components/routines/routines.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutineComponent,
    RoutinesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
