import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private authService : AuthService, 
              private router : Router) { }

  ngOnInit() {
    this.isAuthenticate();
  }

  isAuthenticate(){
    this.authService.isToken();
 }
}
