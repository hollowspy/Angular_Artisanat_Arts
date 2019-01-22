import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FicheBestiaire } from './../../models/ficheBestiaire.models';

@Component({
  selector: 'app-modal-fiche',
  templateUrl: './modal-fiche.component.html',
  styleUrls: ['./modal-fiche.component.css']
})
export class ModalFicheComponent implements OnInit {

  constructor(public thisDialogRef : MatDialogRef <ModalFicheComponent>,
              @Inject(MAT_DIALOG_DATA)public data : any 
              ) { }
  urlPhotoPrincipale:string = ''
  ficheBestiaire:any
  test:Array<string>=[]
  toto:Array<string>=[]
  PrevIsDisabled:boolean = false;
  NextIsDisabled:boolean = false;
  
  ngOnInit() {
   this.urlPhotoPrincipale = this.data[0];
   this.ficheBestiaire = this.data[1]
   this.test = Object.values(this.ficheBestiaire)
   this.toto = this.test.slice(12,17)
   
  //  this.ficheBestiaire[0] = this.data[1].Aphoto_principale
  //  this.ficheBestiaire[1] = this.data[1].Aphoto_annexe2
  //  this.ficheBestiaire[2] = this.data[1].Aphoto_annexe3
  //  this.ficheBestiaire[3] = this.data[1].Aphoto_annexe4
  //  this.ficheBestiaire[4] = this.data[1].Aphoto_annexe5
  //  console.log('fiche Bestiaire dans modal', this.toto)
  }

  onCloseCancel() {
    this
        .thisDialogRef
        .close('Modal Fermée');
  }

  onNext(){
    const item:number = this.toto.length - 1;
    for (let i = 0; i < this.toto.length; i++) {
     if(item === i){
        this.NextIsDisabled = true;
      } else {
        this.NextIsDisabled = false;
        if (this.urlPhotoPrincipale === this.toto[i]){
          this.urlPhotoPrincipale = this.toto[i + 1]
         
          return this.urlPhotoPrincipale
        } 
      }
  }
}
onPrev(){
  const item:number = this.toto.length - 1;
  for (let i = 0; i < this.toto.length; i++) {
    if(i === 0){
      this.PrevIsDisabled = true;
    } else {
      this.PrevIsDisabled = false;
      if (this.urlPhotoPrincipale === this.toto[i]){
        this.urlPhotoPrincipale = this.toto[i -1]
        
        return this.urlPhotoPrincipale
      } 
    }
}
}

}
