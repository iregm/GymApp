import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RoutineService } from 'src/app/services/routines.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 workouts : any[] = []

 constructor(private _workoutService : RoutineService){


 }
  ngOnInit():void {
    this.getWorkouts()
  }

getWorkouts(){

  this._workoutService.getWorkouts().subscribe(data=> {
    this.workouts = [];
    data.forEach ((element:any) => {
      this.workouts.push ({
        id: element.payload.doc.id,
        ...element.payload.doc.data()
      })
    });
  })
}
    
  
}
