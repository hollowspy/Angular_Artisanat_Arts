import {Component, OnInit} from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Admin } from '../../models/admin'
import { AuthService } from '../../service/auth-service.service';
import { AdminService } from '../../service/admin-service.service';
import { SnackbarService } from '../../service/snackbar.service';

@Component({selector: 'app-admin', 
            templateUrl: './formAdmin.component.html', 
            styleUrls: ['./formAdmin.component.css']})

export class formAdminComponent implements OnInit {

   constructor(private router : Router,
               private authService : AuthService, 
                private adminSerice : AdminService, 
                private snackBar : SnackbarService) {}


    data : any;
    isAuth : boolean; 
  

    ngOnInit() {
       if (localStorage.getItem('token')){
           this.router.navigate(['/admin'])
           console.log('je peux continuer')
       } 
      
    }

     
   
   
    admin = new Admin(null,'','', '','', '')
    email = this.admin.email;
    hide=true;
    onConnexion(form:NgForm) {
        // const admin = new Admin(null,'','', '','', '')
        this.admin.email = form.value['email'];
        this.admin.password = form.value['password']
        
       
        
        console.log('je rentre dans onConnexnion avec ces identifiant', this.admin)
             this.adminSerice.postAdmin(null, this.admin)
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
                this.snackBar.openSnackBar('Connexion réussie', '') 
                setTimeout(
                    ()=> { 
                    this.router.navigate(['/admin'])
                    }, 2000
                )
            }, err => {
                this.snackBar.openSnackBar('Identifiants et/ou mot de passe incorrects', '')
                console.log('erreur', err);
                this.isAuth = false;
            });
        }
}
