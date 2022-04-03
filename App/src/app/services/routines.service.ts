import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class RoutineService {

    constructor(private firestore: AngularFirestore){}

    getRoutines():Observable<any>{
        return this.firestore.collection('Rutina').snapshotChanges();
    }
}