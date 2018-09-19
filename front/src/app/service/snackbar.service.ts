import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(public snackBar: MatSnackBar,
             ) { }


  openSnackBar(message:string, action: string) {
    console.log('je rentre dans le service snackbar')
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
