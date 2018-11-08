import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Mail } from './../../models/mail';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from '../../service/snackbar.service';
// import {MatSnackBar} from '@angular/material';



@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {

  isSend : boolean = false;
  data : any;
  @ViewChild('f') form;
  

  constructor(private http : HttpClient,
              public snackBar : SnackbarService,
              ) { }

  ngOnInit() {
    }

  onSendMessage(form:NgForm){ 
    const newMail = new Mail('','','','','');
    newMail.lastName = form.value['lastName']; 
    newMail.firstName = form.value['firstName'];
    newMail.email = form.value['email'];
    newMail.object = form.value['object'];
    newMail.message = form.value['message'];
    console.log(newMail)
    this.http.post('http://localhost:4000/mail', newMail)
    .subscribe(res=> {
      this.data = res; 
      if (this.data.msg === 'error'){
        this.snackBar.openSnackBar('Merci de saisir votre message', '')
      } else {
        this.snackBar.openSnackBar('Mail bien envoyé', '')
      }
    }, err => { 
      console.log('erreur', err)
    })
    // form.form.reset();

    this.form.resetForm(); 
    this.form.markAsUntouched();
  }
}
