import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  showSearchBar : boolean = false;
  title = "Muriel Niedzwiecki"

  constructor(private router : Router,
  ) { }

  ngOnInit() {

  }

  onShowSearchBar(){
    this.showSearchBar = !this.showSearchBar
  }
}
