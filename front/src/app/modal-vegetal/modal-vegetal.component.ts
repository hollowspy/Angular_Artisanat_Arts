import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-vegetal',
  templateUrl: './modal-vegetal.component.html',
  styleUrls: ['./modal-vegetal.component.css']
})
export class ModalVegetalComponent implements OnInit {

  constructor(public thisDialogRef : MatDialogRef <ModalVegetalComponent>, 
            @Inject(MAT_DIALOG_DATA) public data : any
            ) { }
  oeuvre : object 

  ngOnInit() {
    this.oeuvre = this.data;
    console.log('oeuvre', this.oeuvre) 
  }


  onCloseCancel() {
    this
        .thisDialogRef
        .close('Modal Fermée');
  }

}
