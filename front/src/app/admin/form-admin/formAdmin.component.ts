import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Admin } from '../../models/admin'
import { AuthService } from '../../service/auth-service.service';

@Component({selector: 'app-admin', templateUrl: './formAdmin.component.html', styleUrls: ['./formAdmin.component.css']})
export class formAdminComponent implements OnInit {

    constructor(private router : Router,
                private http : HttpClient,
                private authService : AuthService) {}

    ngOnInit() {}

    // onConnexion(form:NgForm) {   const name = form.value['name'];   const
    // password = form.value['password'];   console.log('test form',name,password) }

    data : any;
    isAuth : boolean;
    

    onConnexion(form:NgForm) {
        const admin = new Admin('','', '','')
        admin.email = form.value['name'];
        admin.password = form.value['password']
        let user = ''
        
        
        console.log('je rentre dans onConnexnion avec ces identifiant', admin)
        this
            .http
            .post('http://localhost:4000/admin', admin)
            .subscribe(resp => {
                this.data = resp;
                console.log('youpi ca marche', this.data);
                user = this.data.user
                this.authService.OnAuth(this.data.token)
                this.isAuth = true; 
                // this.router.navigate(['/admin'])
                // this.authService.onAuth('true', user)
                setTimeout(
                    ()=> { 
                    this.router.navigate(['/admin'])
                    }, 1000
                )
            }, err => {
                
                console.log('y\'a une couille dans le potage', err);
                // this.authService.onAuth('false', user)
                this.isAuth = false;
            });
        }
        

    
}
