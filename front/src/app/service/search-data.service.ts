import { Injectable } from '@angular/core';
import { FicheBestiaire } from './../models/ficheBestiaire.models';
import { FicheVegetal } from './../models/ficheVegetal.model';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  constructor() { }

  bestiaire : Array<Object>; 
  vegetal : any; 
  deco : any
  wordSearch : string = '';

  dataBestiaire(data:FicheBestiaire[]){
    this.bestiaire = data;
  }

  dataVegetal(data:FicheVegetal[]){
    this.vegetal = data;
  }

  WordSearch(word:string){
    this.wordSearch = word;
  }

  

}
