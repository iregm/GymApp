import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutineService } from 'src/app/services/routines.service';

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
              private router:Router) { 
    this.createRoutine = this.fb.group({
      Name:['',Validators.required],
      Time:['',Validators.required],
      Level:['',Validators.required],
      Description:['',Validators.required],
      Ejercicios:[[]]

    })
    this.createExercise = this.fb.group({
      NameEj:['',Validators.required],
      Set:['',Validators.required],
      Repetition:['',Validators.required]
    })
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
