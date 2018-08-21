import { Component, OnInit } from '@angular/core';
import { BestiaireService} from '../../service/bestiaire-service'
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
  
  
  constructor(private bestiaireService : BestiaireService, 
              private router : Router, 
              ) { }

  ngOnInit() {
    this.bestiaireService.getBestiaire()
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
    console.log('mon id', id)
    this.router.navigate(['/bestiaire', id])
  }

}
