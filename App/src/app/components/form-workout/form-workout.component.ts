import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutineService } from 'src/app/services/routines.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-workout',
  templateUrl: './form-workout.component.html',
  styleUrls: ['./form-workout.component.css']
})
export class FormWorkoutComponent implements OnInit {
  createWorkout:FormGroup;
  submitted=false;
  

  constructor(private fb: FormBuilder,
              private _workoutService:RoutineService,
              private router:Router,
              private authService: AuthService) {  
    
    this.createWorkout = this.fb.group({
      Dificulty:['',Validators.required],
      TimeSpent:['',Validators.required],
      Observation:'',
      Name: "" ,
      HoraCreacion:"",
      email:''

    })
    
    this.authService.getUserLogged().subscribe(user=>{if(user?.email){this.createWorkout.controls['email'].setValue(user.email);}})
  }

  ngOnInit(): void {

  }

  addWorkout(){
    this.submitted=true;
    if(this.createWorkout.invalid) return;

    
    this._workoutService.addWorkout(this.createWorkout.value).then(()=>{
      console.log('add')
    }).catch(error => {console.log(error)})
    this.router.navigate(['/profile']);
  }
 


}