import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthGardServiceNewUser implements CanActivate{

  constructor(private router:Router, 
            private cookieService: CookieService) { }

  canActivate(route : ActivatedRouteSnapshot, 
              state : RouterStateSnapshot) : 
            Observable<boolean> | Promise<boolean> | boolean { 
    return new Promise(
      (resolve, reject)=> {
        if (this.cookieService.get('idconnected') === '0'){
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
