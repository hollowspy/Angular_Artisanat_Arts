import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Mail } from '../models/mail';
import { SearchDataService } from './../service/search-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  data : any

  constructor(private http:HttpClient, 
              private searchData : SearchDataService) { }

  ngOnInit() {
  }
  
  onSearchBar(form:NgForm){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    };
    const wordSearch = form.value['word']
    const body = new HttpParams()
    .set(`wordSearch`, wordSearch)
    console.log('je rentre dans onSearchBar')
    this.http.post('http://localhost:4000/search', body.toString(), httpOptions )
    .subscribe((res)=> {
      this.data = res
      this.searchData.dataBestiaire(this.data.bestiaire)
      this.searchData.dataVegetal(this.data.vegetal)
    }, (err)=> { 
      console.log('erreur recherche', err)
    })

  }

}
