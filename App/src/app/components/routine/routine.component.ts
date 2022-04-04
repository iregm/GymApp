import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RoutineService } from 'src/app/services/routines.service';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.css']
})
export class RoutineComponent implements OnInit {
  id: string | null;

  aux : any ;
  constructor(
    private _exerService: RoutineService ,
    private aRoute: ActivatedRoute
  ) {
    this.id = aRoute.snapshot.paramMap.get('id');
    console.log(this.id)

   }

  ngOnInit(): void {
    this.getRoutineEjer();
  }


  getRoutineEjer(){
    if(this.id !== null){

       this._exerService.getRoutineEjer(this.id).subscribe(data => {
          data.forEach((Element:any) => {
           console.log(Element.payload.doc.Exer)
       });
    });


     }
  }
}
