import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class RoutineService {

    constructor(private firestore: AngularFirestore){}
    
    addRoutine(routine :any) : Promise<any> {
        return this.firestore.collection('Rutina').add(routine);

    }
    getRoutines():Observable<any>{
        return this.firestore.collection('Rutina').snapshotChanges();
    }

    getRoutineEjer(id:string):Observable<any>{
        return this.firestore.collection('Rutina').doc(id).snapshotChanges();

    }
}