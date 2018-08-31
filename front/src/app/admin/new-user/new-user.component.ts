import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../service/auth-service.service';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Admin } from './../../models/admin';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  newUserForm : FormGroup
  response : any
  checkPassword : boolean = false;
  isAlreadyLogded : boolean = false;
  isSuccess : boolean = false;

  constructor(private authService : AuthService, 
              private router : Router, 
              private formbuilder : FormBuilder, 
              private http : HttpClient) { }

  ngOnInit() {
    this.isAuthenticate();
    this.initForm();
    console.log('nouvel utilisateur', this.newUserForm) 
  }

  isAuthenticate(){
    this.authService.isToken();
 }

 initForm(){
  this.newUserForm = this.formbuilder.group({
  email : ['', Validators.required], 
  password : ['', Validators.required], 
  passwordCheck : ['', Validators.required], 
  alias : ['', Validators.required]
   })
 }

 onAddUser(){ 
   const email = this.newUserForm.get('email').value
   const password = this.newUserForm.get('password').value
   const passwordCheck = this.newUserForm.get('passwordCheck').value
   const alias = this.newUserForm.get('alias').value
   const newUser = new Admin(email,password,passwordCheck,alias)
   this.http.post('http://localhost:4000/admin/newuser',newUser)
   .subscribe((res)=> {
     this.response = res; 
     switch (this.response.message) {
       case 'mail trouvé pas de création':
        this.isAlreadyLogded = true;
        alert('Ce mail est déjà enregistré. Impossible de créer le compte')
        break;
        case 'password differents':
        this.checkPassword = true;
        alert('Les mots de passes ne correspondent pas. Merci de les retaper')
        break;
        default:
        this.isSuccess = true;
        break;
     }
     
   }, (err)=> {
     console.log('erreur ajout utilisateur')
   })

   setTimeout(
     () => {
       if (this.isSuccess === true){
         this.authService.onLogOut();
         this.router.navigate(['/auth'])
       }
       else{
         this.isAlreadyLogded = false;
         this.checkPassword = false;
       }
     }, 2000
   )


 }

}
