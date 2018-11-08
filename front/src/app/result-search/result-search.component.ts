import { Component, OnInit } from '@angular/core';
import { SearchDataService } from './../service/search-data.service';
import { FicheBestiaire } from './../models/ficheBestiaire.models';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ModalVegetalComponent } from '../modal-vegetal/modal-vegetal.component';


@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent implements OnInit {

  bestiaire : Array<Object>
  vegetal : Array<Object>
  dialogResult:string= '';
  wordSearch:string = ''

  constructor(private searchData : SearchDataService, 
              private router : Router, 
              public dialog:MatDialog) { }

  ngOnInit() {
     // console.log('result dans service', this.searchData.bestiaire)
      if (this.searchData.bestiaire == undefined){
        this.bestiaire = []; 
        this.vegetal = [];
        return this.router.navigate(['/'])
      } else {
        this.bestiaire = this.searchData.bestiaire
        this.vegetal = this.searchData.vegetal
        // console.log('bestiaire', this.bestiaire)
        // console.log('vegetal', this.vegetal)
      }
      this.wordSearch = this.searchData.wordSearch
      console.log('result search WordSearch', this.wordSearch)
     
       
  }

  onDetailBestiaire(id:number){
    this.router.navigate(['/bestiaire', id])
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
