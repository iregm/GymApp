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
  rutina: any[] = [];

  id: string | null;

  aux : any ;

  constructor(
    private fb : FormBuilder,
    private _routineService: RoutineService ,
    private aRoute: ActivatedRoute
  ) {
    
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

    
   

  ngOnInit(): void {
    this.getRoutineEjers();
  }
  done(){
    if(this.id != null)
    this._routineService.update(this.id,this.aux.Done+1)
  }


  getRoutineEjers(){
    if(this.id !== null){

      this._routineService.getRoutines("javierru8@gmail.com").subscribe(data => {
        this.rutina = [];
        data.forEach((Element:any) => {
          this.rutina.push({
            id: Element.payload.doc.id,
            ...Element.payload.doc.data()
          })
        });

        for( let i= 0 ; i <= this.rutina.length; i++ ){
          if(this.id == this.rutina[i].id){
           this.aux = this.rutina[i];
           console.log(this.aux.exercises)
          }
        }

        console.log (this.rutina);
      });
          
    }


     
  }
}