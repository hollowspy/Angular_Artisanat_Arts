import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '../../../../node_modules/@angular/animations';

@Component({
  selector: 'app-column-artisanat',
  templateUrl: './column-artisanat.component.html',
  styleUrls: ['./column-artisanat.component.css'],
  animations : [
    trigger('fade',[
      state('void', style({opacity : 0
                          })),
      transition(':enter', // pareil que 'void => *'
      [
        // style({opacity : 0}),
        animate(2000)
     ]),
    ])
  ]
})
export class ColumnArtisanatComponent implements OnInit {

  artisanat = ['A','R','T','I','S','A','N','A','T'];
  art = ['D\'', 'A', 'R', 'T']
  
  
  constructor() { }

  ngOnInit() {
   
    
  }
  

}
