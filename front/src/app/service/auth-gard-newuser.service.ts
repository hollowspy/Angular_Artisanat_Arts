import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGardServiceNewUser implements CanActivate{

  constructor(private router:Router) { }

  canActivate(route : ActivatedRouteSnapshot, 
              state : RouterStateSnapshot) : 
            Observable<boolean> | Promise<boolean> | boolean { 
    return new Promise(
      (resolve, reject)=> {
        if (localStorage.getItem('idConnected') === '0'){
          resolve(true)
        } else {
          alert('vous devez etre super admin')
          this.router.navigate(['/admin'])
          resolve(false)
        }
      }
    )
  }
}
