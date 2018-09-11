import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router, 
              private authService : AuthService) { }

  ngOnInit() {
  }

  onDeconnexion() {
    this.authService.onLogOut();
}


}
