import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Admin } from './../../models/admin';
import { AuthService } from './../../service/auth-service.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  constructor(private http : HttpClient, 
              private router : Router, 
              private authService : AuthService) { }
  
  mailForPassword : string = ''    
  data : any;
  isDifferentsPassword : boolean = false;  
  isPasswordUpdated : boolean = false; 

  ngOnInit() {
    if(!localStorage.getItem("forgotPassword")){
      console.log('pas de token password present')
      this.router.navigate(['/'])
    } else {
      console.log('token update password present')
    }

    this.mailForPassword = localStorage.getItem("mailForPassword")


  }


  onUpdatePassword(form:NgForm){
    const updateAdmin = new Admin(this.mailForPassword,'','','', '');
    updateAdmin.password = form.value['password']; 
    updateAdmin.passwordCheck = form.value['passwordCheck'];
    if (updateAdmin.password.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$')){
      console.log(updateAdmin)
      this.authService.postPassword('updatePassword', updateAdmin)
      .subscribe((res) => {
        this.data = res; 
        switch (this.data.message) {
          case'les mots de passes sont différents':
            this.isDifferentsPassword = true;
            break
          case 'mail mis à jour':
            this.isPasswordUpdated = true;
            setTimeout(
              () => {
                localStorage.removeItem('forgotPassword'); 
                localStorage.removeItem('mailForPassword');
                this.router.navigate(['/auth'])
              }, 4000
            )
            break;
          default:
            console.log('pb de maj password')
            break;
        }
      })
    }
    else{
      alert('Vous devez avoir une majuscule, un chiffre et votre mot de passe doit faire 8 caractères ')
    }
 
  }

}


