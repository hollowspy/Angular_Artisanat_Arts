import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOCALE_DATA } from '@angular/common/src/i18n/locale_data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   constructor(private router : Router) { }

   isAuth = false;
   userLog = '';

  //  onAuth(authentificated, user){
  //   console.log('je rentre avec', authentificated)
  //   console.log('utilisateur connecté', user)
  //    if (authentificated === 'false'){
  //     this.isAuth = false
  //   console.log('authentification echec',this.isAuth)
  //     return this.isAuth
       
  //    }
  //    else {
  //     this.isAuth = true
  //     console.log('réussite auth',this.isAuth)
  //     this.userLog = user
  //     return this.isAuth
  //    }
  //  }


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

   onLogOut(){
      localStorage.removeItem('token');
    //  this.isAuth = false;
     this.router.navigate(['/auth'])

   }


}
