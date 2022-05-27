import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { RoutineService } from 'src/app/services/routines.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
  clases: any[] = [];
  email='';
  type='';
  nameT='';
  constructor(private _clasesService: RoutineService,private authService: AuthService) {  
    this.authService.getUserLogged().subscribe(user=>{if(user?.email){this.getemail(user.email);this.getU();}})
  }
  getemail(e:string){this.email=e;console.log(this.email)}

  ngOnInit(): void {
    this.getClases();
  }
  join(id:string,res:string[]){
    res.push(this.email)
    console.log(res)
    this._clasesService.joinClass(id,res)
  }
  cancel(id:string,res:string[]){
    res= res.filter(word=>word!=this.email)
    this._clasesService.cancelClass(id,res)
  }
  delete(id:string){
    this._clasesService.deleteClass(id)
  }
  getU(){
    this._clasesService.getUser(this.email).subscribe(data => {
      data.forEach((Element:any) => {
        console.log(Element.payload.doc.data())
        this.type=Element.payload.doc.data().type
        this.nameT=Element.payload.doc.data().name

      })
        
    })
  }

  getClases(){

    this._clasesService.getClases().subscribe(data => {
      this.clases = [];
      data.forEach((Element:any) => {
        let res = false;
        for(let i =0;i<=Element.payload.doc.data().Members.length;i++){if(Element.payload.doc.data().Members[i]==this.email)res=true}
        
        this.clases.push({
          id: Element.payload.doc.id,
          apuntado: res,
          ...Element.payload.doc.data()
        })
      });
      console.log (this.clases);
    });
  }

}
