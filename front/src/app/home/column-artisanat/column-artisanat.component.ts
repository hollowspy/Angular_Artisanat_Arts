import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, transition, style, animate } from '../../../../node_modules/@angular/animations';

@Component({
  selector: 'app-column-artisanat',
  templateUrl: './column-artisanat.component.html',
  styleUrls: ['./column-artisanat.component.css'],
  animations : [
    trigger('color',[
      state('void', style({opacity : 0,
                          backgroundColor : 'black' })),
      transition(':enter', // pareil que 'void => *'
      [
        // style({opacity : 0}),
        animate(2000)
     ]),
    ])
  ]
})
export class ColumnArtisanatComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

}
