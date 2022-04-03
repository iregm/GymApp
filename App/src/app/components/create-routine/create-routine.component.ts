import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { 
    this.createRoutine = this.fb.group({
      Name:['',Validators.required],
      Time:['',Validators.required],
      Level:['',Validators.required],
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
    this.createRoutine.controls['Ejercicios'].setValue(this.exercises);
    console.log(this.createRoutine)
  }
  addExercise(){
    this.exercises.push(this.createExercise.value);
    console.log(this.exercises)
  }

}
