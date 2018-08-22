import { Component, OnInit } from '@angular/core';
import { FicheVegetal } from './../../models/ficheVegetal.model';
import { Subject } from 'rxjs';
import { ApiService } from './../../service/api-service';
import { MatDialog } from '@angular/material';
import { ModalVegetalComponent } from './../../modal-vegetal/modal-vegetal.component';

@Component({
  selector: 'app-vegetal',
  templateUrl: './vegetal.component.html',
  styleUrls: ['./vegetal.component.css']
})
export class VegetalComponent implements OnInit {

  private vegetal : FicheVegetal[]; 
  vegetalSubject = new Subject < any[]> (); 

  constructor(private apiService : ApiService, 
              public dialog:MatDialog            
  ) {}

  dialogResult = "";

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

  openDialog(data){
    console.log('je rentre dans openDialog Vegetal')
    let dialogRef = this.dialog.open(ModalVegetalComponent, {
      width : '100vw', 
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
      });
  }

}
