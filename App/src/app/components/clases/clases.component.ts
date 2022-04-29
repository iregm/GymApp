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
  constructor(private _clasesService: RoutineService,private authService: AuthService) {  
    this.authService.getUserLogged().subscribe(user=>{if(user?.email){this.getemail(user.email)}})
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

  getClases(){

    this._clasesService.getClases().subscribe(data => {
      this.clases = [];
      data.forEach((Element:any) => {
        let res = false;
        console.log(Element.payload.doc.data())
        for(let i =0;i<=Element.payload.doc.data().Members.length;i++){if(Element.payload.doc.data().Members[i]=='javierru8@gmail.com')res=true}
        
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
