import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Admin} from './../../models/admin';
import { AuthService } from './../../service/auth-service.service';

@Component({selector: 'app-forgot-password', templateUrl: './forgot-password.component.html', styleUrls: ['./forgot-password.component.css']})
export class ForgotPasswordComponent implements OnInit {

    isSend : boolean = false;
    isNotFound : boolean = false;
    token : any
    constructor(private http : HttpClient,
                private authService : AuthService) {}

    ngOnInit() {}

    onForgotPassword(form : NgForm) {
        const email = form.value['email']
        const newUser = new Admin(email, '', '', '', '')
        this.authService.postPassword('forgotPassword', newUser)
            .subscribe((res) => {
                this.token = res
                if (this.token.message === 'pas de mail trouvé') {
                    this.isNotFound = true;
                } else {
                    console.log('this token', this.token)
                    if (this.token.token && this.token.mail) {
                        localStorage.setItem("forgotPassword", this.token.token)
                        localStorage.setItem("mailForPassword", this.token.mail)
                        this.isSend = true;
                    } 
                }

            }, (err) => {
                console.log(err)
            })
        
    }

}
