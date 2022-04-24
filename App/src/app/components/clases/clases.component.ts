import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { RoutineService } from 'src/app/services/routines.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
  clases: any[] = [];
  constructor(private _clasesService: RoutineService) {  }

  ngOnInit(): void {
    this.getClases();
  }

  getClases(){

    this._clasesService.getClases().subscribe(data => {
      this.clases = [];
      data.forEach((Element:any) => {
        this.clases.push({
          id: Element.payload.doc.id,
          ...Element.payload.doc.data()
        })
      });
      console.log (this.clases);
    });
  }

}
