import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {  } from 'src/app/services/routines.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser:FormGroup;

  ngOnInit():void {
 
  }

  constructor(private authService: AuthService, private router: Router,private fb: FormBuilder) 
  { 
      this.loginUser = this.fb.group({
        email:['',Validators.required],
        password:['',Validators.required]
      })
    }

  Ingresar() {
    this.authService.login(this.loginUser.value.email,this.loginUser.value.password ).then(user => {

      if(!user) {
        alert("Wrong data, if you dont have an account then Singup!");
        return;
      };
      this.router.navigate(['/home'])
    }).catch(err=>{
      console.log(err)
    })
  }


  logout() {
    this.authService.logout();
  }

}
