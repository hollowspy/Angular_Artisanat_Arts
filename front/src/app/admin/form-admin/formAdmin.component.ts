import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Admin } from '../../models/admin'
import { AuthService } from '../../service/auth-service.service';
import { AdminService } from '../../service/admin-service.service';

@Component({selector: 'app-admin', templateUrl: './formAdmin.component.html', styleUrls: ['./formAdmin.component.css']})
export class formAdminComponent implements OnInit {

    constructor(private router : Router,
                private http : HttpClient,
                private authService : AuthService, 
                private adminSerice : AdminService) {}


    data : any;
    isAuth : boolean; 
  

    ngOnInit() {
       if (localStorage.getItem('token')){
           this.router.navigate(['/admin'])
           console.log('je peux continuer')
       } 
      
    }

     

    onConnexion(form:NgForm) {
        const admin = new Admin(null,'','', '','', '')
        admin.email = form.value['name'];
        admin.password = form.value['password']
        
       
        
        console.log('je rentre dans onConnexnion avec ces identifiant', admin)
             this.adminSerice.postAdmin(null, admin)
            .subscribe(resp => {
                console.log('reponse', resp)
                this.data = resp;
                console.log('youpi ca marche', this.data);
                let user = {
                   id : this.data.user.id, 
                   email : '',
                   password : '', 
                   passwordCheck : '', 
                   firstName : this.data.user.firstName, 
                   lastName : this.data.user.lastName,
                }

                this.authService.OnAuth(this.data.token)
                this.authService.onLogInt(user)
                this.isAuth = true; 
                setTimeout(
                    ()=> { 
                    this.router.navigate(['/admin'])
                    }, 1000
                )
            }, err => {
                
                console.log('y\'a une couille dans le potage', err);
                this.isAuth = false;
            });
        }
}
