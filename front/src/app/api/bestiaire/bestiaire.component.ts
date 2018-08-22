import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../service/api-service'
import { Bestiaire } from '../../models/bestiaire.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-bestiaire',
  templateUrl: './bestiaire.component.html',
  styleUrls: ['./bestiaire.component.css']
})
export class BestiaireComponent implements OnInit {

  private bestiaire : Bestiaire[];
  bestiaireSubject = new Subject < any[] > ();
  
  
  constructor(private apiService : ApiService, 
              private router : Router, 
              ) { }

  ngOnInit() {
    this.apiService.getApi('bestiaire')
   .subscribe((data : Bestiaire[]) => {
        this.bestiaire = data
        this.emitBestiaire();
        console.log('Administration Bestiaire', this.bestiaire)
    })
    
  }

  emitBestiaire(){
    this.bestiaireSubject.next(this.bestiaire.slice())
  }

  onFicheDetail(id:number){
     this.router.navigate(['/bestiaire', id])
  }

}
