import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutineService } from 'src/app/services/routines.service';

@Component({
  selector: 'app-create-clase',
  templateUrl: './create-clase.component.html',
  styleUrls: ['./create-clase.component.css']
})
export class CreateClaseComponent implements OnInit {
  createClase:FormGroup;
  submitted=false;

  constructor(private fb: FormBuilder,
              private _claseService:RoutineService,
              private router:Router) { 
    this.createClase = this.fb.group({
      Name:['',Validators.required],
      Hora:['',Validators.required],
      Day:['',Validators.required],
      Profesor:['',Validators.required],
      Members:[[]]
        })
  }

ngOnInit(): void {
}


addClase(){
    this.submitted=true;
    if(this.createClase.invalid) return;
    this._claseService.addClase(this.createClase.value).then(()=>{
      console.log('add')
    }).catch(error => {console.log(error)})
    this.router.navigate(['/clases']);
  }
}