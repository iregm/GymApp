import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutineService } from 'src/app/services/routines.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-routine',
  templateUrl: './create-routine.component.html',
  styleUrls: ['./create-routine.component.css']
})
export class CreateRoutineComponent implements OnInit {
  createRoutine:FormGroup;
  createExercise:FormGroup;
  submitted=false;
  exercises: any[]= [];

  constructor(private fb: FormBuilder,
              private _routineService:RoutineService,
              private router:Router,
              private authService: AuthService) {  
    
    this.createRoutine = this.fb.group({
      Name:['',Validators.required],
      Time:['',Validators.required],
      Level:['',Validators.required],
      Description:['',Validators.required],
      Ejercicios:[[]],
      Done:[0],
      email:''

    })
    this.createExercise = this.fb.group({
      NameEj:['',Validators.required],
      Set:['',Validators.required],
      Repetition:['',Validators.required]
    })
    this.authService.getUserLogged().subscribe(user=>{if(user?.email){this.createRoutine.controls['email'].setValue(user.email);}})
  }

  ngOnInit(): void {
  }

  addRoutine(){
    this.submitted=true;
    if(this.createRoutine.invalid) return;

    this.createRoutine.controls['Ejercicios'].setValue(this.exercises);
    this._routineService.addRoutine(this.createRoutine.value).then(()=>{
      console.log('add')
    }).catch(error => {console.log(error)})
    this.router.navigate(['/routines']);
  }
  addExercise(){
    this.exercises.push(this.createExercise.value);
    this.createExercise.reset();
  }


}
