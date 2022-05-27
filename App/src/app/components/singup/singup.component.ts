import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RoutineService } from 'src/app/services/routines.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  createUser:FormGroup;
  user:any;

  ngOnInit() {}

  constructor(private authService: AuthService, private database: RoutineService, private router: Router,private fb: FormBuilder) {
    this.createUser = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
      name:['',Validators.required],
      height:['',Validators.required],
      weight:['',Validators.required],
      type:['',Validators.required]
    })
   }

  registrarse() {
    this.user = {
      name:this.createUser.value.name,
      height:this.createUser.value.height,
      weight:this.createUser.value.weight,
      email:this.createUser.value.email,
      type:this.createUser.value.type
    }
    this.authService.register(this.createUser.value.email,this.createUser.value.password ).then(user => {

        this.database.addUser(this.user).then(()=>{

        }).catch(error => {console.log(error)});

      this.router.navigate(['/home']);
    }).catch(err => {
      console.log(err)
    })
  }

}
