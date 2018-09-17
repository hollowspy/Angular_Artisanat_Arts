import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './../../service/auth-service.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Admin } from './../../models/admin';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from './../../service/snackbar.service';

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
  isPasswordValid : boolean = false;
  password:string = ''
  hide:boolean = true;
  
 

  constructor(private authService : AuthService, 
              private router : Router, 
              private formbuilder : FormBuilder, 
              private http : HttpClient, 
              private snackBar : SnackbarService) { }

  

  ngOnInit() {
    if (localStorage.getItem('idConnected') === '0'){
      this.isAuthenticate();
      this.initForm();
      console.log('nouvel utilisateur', this.newUserForm) 
    } else {
      alert('Seul le super admin peut rajouter d\'autres administrateurs')
      this.router.navigate(['/admin'])
    }
  }

  isAuthenticate(){
    this.authService.isToken();
 }

 updateValue(e){
   this.password = e.target.value
    if (this.password.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$')){
     this.isPasswordValid = true;
    } else {
     this.isPasswordValid = false;
  }
  
 }



 initForm(){
  
  this.newUserForm = this.formbuilder.group({
  email : ['', [Validators.required, Validators.email]], 
  password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$')]],
  passwordCheck :['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$')]], 
  firstName : ['', Validators.required],
  lastName : ['', Validators.required]
   })
  console.log('log email initForm', this.newUserForm.value.email)
 }

 
    onAddUser(){ 
      const formValue = this.newUserForm.value
      const newUser = new Admin(
        null,
        formValue['email'], 
        formValue['password'], 
        formValue['passwordCheck'],
        formValue['firstName'],
        formValue['lastName']
      )
      console.log('nouvel admin', newUser)
      if (newUser.password != newUser.passwordCheck){
        return alert('Mots de passes différents')
      }
      console.log('test password', newUser.password)
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
            this.snackBar.openSnackBar('Nouvel utilisateur enregistré', '')
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
