import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class RoutineService {
    addWorkout(workout: any) {
        return this.firestore.collection('Workout').add(workout);
    }

    constructor(private firestore: AngularFirestore){}
    
    addRoutine(routine :any) : Promise<any> {
        return this.firestore.collection('Rutina').add(routine);

    }
    addClase(clase: any) : Promise<any>{
        return this.firestore.collection('Clase').add(clase);
    }
    
    addUser(user :any) : Promise<any> {
        return this.firestore.collection('User').add(user);

    }
    getRoutines(email:string):Observable<any>{
        return this.firestore.collection('Rutina',ref => ref.where('email','==',email)).snapshotChanges();
    }

    getRoutineEjer(id:string):Observable<any>{
        return this.firestore.collection('Rutina').doc(id).get();

    }
    deleteRoutine(id:string){
        this.firestore.collection('Rutina').doc(id).delete();

    }
    joinClass(id:string,res:string[]){
        this.firestore.collection('Clase').doc(id).update({
            Members: res
          });;

    }
    cancelClass(id:string,res:string[]){
        this.firestore.collection('Clase').doc(id).update({
            Members: res
          });;

    }
    getUser(email:string):Observable<any>{
        return this.firestore.collection('User',ref => ref.where('email','==',email)).get();

    }
    getClases():Observable<any>{
        return this.firestore.collection('Clase').snapshotChanges();
    }
    
    update(id:string | undefined,num:number){
        return this.firestore.collection('Rutina').doc(id).update({
            Done: num
          });;
    }
}