import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { RoutineService } from 'src/app/services/routines.service';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.css']
})
export class RoutinesComponent implements OnInit {
  rutinas: any[] = [];
  constructor(private _routineService: RoutineService) {  }

  ngOnInit(): void {
    this.getRoutines();
  }

  getRoutines(){

    this._routineService.getRoutines().subscribe(data => {
      this.rutinas = [];
      data.forEach((Element:any) => {
        this.rutinas.push({
          id: Element.payload.doc.id,
          ...Element.payload.doc.data()
        })
      });
      console.log (this.rutinas);
    });
  }

}
