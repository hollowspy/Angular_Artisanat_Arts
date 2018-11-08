import { Component } from '@angular/core';
import { trigger, state, transition, style, animate } from '../../../../node_modules/@angular/animations';
import { Router } from '@angular/router';
import { Bestiaire } from './../../models/bestiaire.model';

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
export class ColumnArtisanatComponent  {
  artisanat : Array <string> = ['A','R','T','I','S','A','N','A','T'];
  art : Array <string> = ['D\'', 'A', 'R', 'T']
 
  
  constructor(private router:Router) { }
  

}
