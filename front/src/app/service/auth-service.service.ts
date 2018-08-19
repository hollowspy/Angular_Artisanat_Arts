import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

   constructor(private router : Router) { }

   isAuth = false;
   userLog = '';

   onAuth(authentificated, user){
    //  console.log('je rentre avec', authentificated)
    //  console.log('utilisateur connecté', user)
     if (authentificated === 'false'){
      this.isAuth = false
      // console.log('authentification echec',this.isAuth)
      return this.isAuth
       
     }
     else {
      this.isAuth = true
      // console.log('réussite auth',this.isAuth)
      this.userLog = user
      return this.isAuth
     }
   }

   onLogOut(){
     this.isAuth = false;
     this.router.navigate(['/admin'])

   }


}
