import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { RoutineService } from 'src/app/services/routines.service';
import { AuthService } from 'src/app/services/auth.service';
import { user } from '@angular/fire/auth';


@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.css']
})
export class RoutinesComponent implements OnInit {
  rutinas: any[] = [];
  
  
  constructor(private _routineService: RoutineService,private authService: AuthService) { 
    var email=''; 
    this.authService.getUserLogged().subscribe(user=>{if(user?.email){this.getRoutines(user.email);email=user.email}})
  }

  ngOnInit(): void {
     
    }
  deleteRoutine(id:string){
    this._routineService.deleteRoutine(id)
  }

  getRoutines(email:string){
    console.log(email)
    this._routineService.getRoutines(email).subscribe(data => {
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
