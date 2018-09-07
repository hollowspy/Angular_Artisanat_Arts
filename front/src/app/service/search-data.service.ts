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

  dataBestiaire(data:FicheBestiaire[]){
    this.bestiaire = data;
    console.log('dans service bestiaire',this.bestiaire)
  }

  dataVegetal(data:FicheVegetal[]){
    this.vegetal = data;
    console.log('dans service vegetal', this.vegetal)
  }
}
