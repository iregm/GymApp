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
    addUser(user :any) : Promise<any> {
        return this.firestore.collection('User').add(user);

    }
    getRoutines():Observable<any>{
        return this.firestore.collection('Rutina').snapshotChanges();
    }

    getRoutineEjer(id:string):Observable<any>{
        return this.firestore.collection('Rutina').doc(id).get();

    }
    getUser(email:string):Observable<any>{
        return this.firestore.collection('User',ref => ref.where('email','==',email)).get();

    }
}