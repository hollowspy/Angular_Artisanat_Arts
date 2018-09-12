import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Mail } from '../models/mail';
import { SearchDataService } from './../service/search-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  data : any

  constructor(private http:HttpClient, 
              private searchData : SearchDataService, 
              private router:Router) { }

  ngOnInit() {
  }
  
  onSearchBar(form:NgForm){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    };
    const wordSearch = form.value['word']
    if (wordSearch === '' || wordSearch === undefined || wordSearch === null){
      alert('Ca serait bien d\'écrire un mot clé pour faire une recherche')
    } else {
      const body = new HttpParams()
    .set(`wordSearch`, wordSearch)
    console.log('je rentre dans onSearchBar')
    this.http.post('http://localhost:4000/search', body.toString(), httpOptions )
    .subscribe((res)=> {
      this.data = res
      this.searchData.dataBestiaire(this.data.bestiaire)
      this.searchData.dataVegetal(this.data.vegetal)
      this.router.navigate(['/search'])
    }, (err)=> { 
      console.log('erreur recherche', err)
    })

    }
    

  }

}
