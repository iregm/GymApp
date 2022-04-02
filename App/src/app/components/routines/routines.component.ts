import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.css']
})
export class RoutinesComponent implements OnInit {
  rutinas: Observable<any[]>;
  constructor(firestore: AngularFirestore) { 

    this.rutinas = firestore.collection('Rutinas').valueChanges();
  }

  ngOnInit(): void {
  }

}
