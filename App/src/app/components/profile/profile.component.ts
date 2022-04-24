import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RoutineService } from 'src/app/services/routines.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  updateUser:FormGroup;
  user:any;

  ngOnInit() {}

  constructor(private authService: AuthService, private database: RoutineService, private router: Router,private fb: FormBuilder) {
    this.updateUser = this.fb.group({
      name:['',Validators.required],
      height:['',Validators.required],
      weight:['',Validators.required]
    })
   }

  update() {
    this.user = {
      name:this.updateUser.value.name,
      height:this.updateUser.value.height,
      weight:this.updateUser.value.weight,
      email:this.updateUser.value.email
    }

        this.database.addUser(this.user).then(()=>{
        }).catch(error => {console.log(error)});
      
        this.router.navigate(['/home']);
    
  }
}
