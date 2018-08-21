import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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

  ngOnInit() {
   this.urlPhotoPrincipale = this.data
  }

}
