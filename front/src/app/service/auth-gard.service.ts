import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements CanActivate{

  constructor(private router:Router) { }

  canActivate(route : ActivatedRouteSnapshot, 
              state : RouterStateSnapshot) : 
            Observable<boolean> | Promise<boolean> | boolean { 
    return new Promise(
      (resolve, reject)=> {
        if (localStorage.getItem('token') !== null){
          resolve(true)
        } else {
          alert('merci de bien vouloir vous identifier')
          this.router.navigate(['/auth'])
          resolve(false)
        }
      }
    )
  }
}
