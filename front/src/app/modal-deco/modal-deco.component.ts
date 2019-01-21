import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-deco',
  templateUrl: './modal-deco.component.html',
  styleUrls: ['./modal-deco.component.css']
})
export class ModalDecoComponent implements OnInit {

  constructor(public thisDialogRef : MatDialogRef<ModalDecoComponent>, 
    @Inject(MAT_DIALOG_DATA) public data : any
          ) { }

    oeuvre:object; 
    srcPhoto:string = ''

  ngOnInit() {
    this.oeuvre = this.data[0];
    this.srcPhoto = this.data[1]
    console.log('je suis dans modal deco component oeuvre', this.oeuvre)
    console.log('source photo', this.srcPhoto)
  }

  
  onCloseCancel() {
    this
        .thisDialogRef
        .close('Modal Fermée');
  }

}
