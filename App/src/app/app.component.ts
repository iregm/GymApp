import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'App';
  userLogged = this.authService.getUserLogged();
  constructor(private authService: AuthService,private router: Router){}

  logOut(){
    this.authService.logout();
    this.router.navigate(['/'])
  }
}
