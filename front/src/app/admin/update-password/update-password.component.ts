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
  hide: boolean = true; 
  showProgressBar : boolean = false;
  // password:string = '';
  typeProgressbar : string = ''; 
  valueProgressBar : number = 0;
  difficultyPassword : string = ''

  ngOnInit() {
    if(!localStorage.getItem("forgotPassword")){
      console.log('pas de token password present')
      this.router.navigate(['/'])
    } else {
      console.log('token update password present')
    }

    this.mailForPassword = localStorage.getItem("mailForPassword")


  }

  updateValue(e){
    this.password = e.target.value
   if (this.password.length >= 1){
     this.showProgressBar = true;
   }
   else {
     this.showProgressBar = false;
   }
   if (this.password.length <= 5){
     this.typeProgressbar = 'success'; 
     this.valueProgressBar = 33;
     this.difficultyPassword = 'facile'
   }
   if (this.password.match(/\w{6,}/g)){
     this.typeProgressbar = 'warning'; 
     this.valueProgressBar = 66;
     this.difficultyPassword = 'moyenne'
   }
   if (this.password.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$')) {
     this.typeProgressbar = 'danger'; 
     this.valueProgressBar = 100;
     this.difficultyPassword = 'élevée'
   }
   
  }


  updateAdmin = new Admin(0,this.mailForPassword,'','','', '');
  password = this.updateAdmin.password
  passwordCheck = this.updateAdmin.passwordCheck

  onUpdatePassword(form:NgForm){
    const updateAdmin = new Admin(0,this.mailForPassword,'','','', '');
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


