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
  // urlImageApi : string = 'http://localhost:4000/images/'
  // urlImagePrincipale : string = ''
  // image1 = 'http://localhost:4000/images/';
  // image2 = '62975_104087909653262_1366761_n.jpg'
  // image = this.image1 + this.image2
  urlImagePrincipale = ''
  srcImage = '';
  
  
  constructor(private apiService : ApiService, 
              private router : Router, 
              ) { }

  ngOnInit() {
    let urlImageApi = 'http://localhost:4000/images/'
    console.log(this.srcImage)
    this.apiService.getApi('bestiaire', null)
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
