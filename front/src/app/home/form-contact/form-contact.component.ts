import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mail } from './../../models/mail';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {

  isSend : boolean = false;
  data : any;

  constructor(private http : HttpClient) { }

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
        alert('Merci de bien saisir votre message')
      } else {
        alert('Votre mail a bien été envoyé')
      }
    }, err => { 
      console.log('erreur', err)
    })
    form.reset();
  }
 
}
