import { Component, OnInit } from '@angular/core';
import { FicheVegetal } from './../../models/ficheVegetal.model';
import { Subject } from 'rxjs';
import { ApiService } from './../../service/api-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vegetal',
  templateUrl: './vegetal.component.html',
  styleUrls: ['./vegetal.component.css']
})
export class VegetalComponent implements OnInit {

  private vegetal : FicheVegetal[]; 
  vegetalSubject = new Subject < any[]> (); 

  constructor(private apiService : ApiService, 
              private router : Router            
  ) { }

  ngOnInit() {
    this.apiService.getApi('vegetal')
    .subscribe(
      (data : FicheVegetal[]) => { 
        this.vegetal = data
        this.emitVegetal();
        console.log('api Vegetal', this.vegetal)
      })
  }

  emitVegetal(){
    this.vegetalSubject.next(this.vegetal.slice())
  }

}
