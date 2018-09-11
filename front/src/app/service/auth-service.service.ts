import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOCALE_DATA } from '@angular/common/src/i18n/locale_data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ;

   constructor(private router : Router, 
              private http: HttpClient) { }

   isAuth = false;
   firstName:string = '';
   lastName:string = ''
   

 

  OnAuth(token){
    localStorage.setItem('token', token)
  }

  isToken(){
    if (localStorage.getItem("token") === null) {
      alert('Vous devez vous administrer')
     this.router.navigate(['/auth'])
    }
    else{

      console.log('token en place')
    }
  }

  onLogInt(user){
    console.log('je rentre dans Log IN', user)
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    localStorage.setItem('idConnected', user.id)
    console.log('servvice auth', this.firstName, this.lastName )
  }

   onLogOut(){
      localStorage.removeItem('token');
      localStorage.removeItem('idConnected')
      this.router.navigate(['/auth'])

   }

   postPassword(url, form){
     return this.http.post(`http://localhost:4000/auth/${url}`, form)
   }


}
