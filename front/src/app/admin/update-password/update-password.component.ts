import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Admin } from './../../models/admin';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  constructor(private http : HttpClient, 
              private router : Router) { }
  
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
    const updateAdmin = new Admin(this.mailForPassword,'','','');
    updateAdmin.password = form.value['password']; 
    updateAdmin.passwordCheck = form.value['passwordCheck'];
    console.log(updateAdmin)
    this.http.post('http://localhost:4000/auth/updatePassword', updateAdmin)
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

}


