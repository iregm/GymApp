import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RoutineService } from 'src/app/services/routines.service';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.css']
})
export class RoutineComponent implements OnInit {
  routine: FormGroup;

  id: string | null;

  aux : any ;
  constructor(
    private fb : FormBuilder,
    private _exerService: RoutineService ,
    private aRoute: ActivatedRoute
  ) {
  this.routine = this.fb.group({
  NameEj : ['',Validators.required],
 Repetition : ['',Validators.required],
  Set : ['',Validators.required]
})

    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)

   }

  ngOnInit(): void {
    this.getRoutineEjers();
  }


  getRoutineEjers(){
    if(this.id !== null){

       this._exerService.getRoutineEjer(this.id).subscribe(data => {
            const fi = 
           console.log(data.payload.data()['Name'])
          
    });


     }
  }
}
