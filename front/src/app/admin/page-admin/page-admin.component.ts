import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {AuthServiceService} from '../../service/auth-service.service';
import {BestiaireService} from '../../service/bestiaire-service';
import {Bestiaire} from '../../models/bestiaire.model';
import {Subject} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { FormBestiaireComponent } from '../form-bestiaire/form-bestiaire.component';

@Component({selector: 'app-page-admin', templateUrl: './page-admin.component.html', styleUrls: ['./page-admin.component.css']})
export class PageAdminComponent implements OnInit {

   

    userLog = ''
    private bestiaire : Bestiaire[];
    bestiaireSubject = new Subject < any[] > ();
    showBestiaire : boolean = false;
    showDeco : boolean = false;
    showVegetal : boolean = false;
    dialogResult = "";
    ficheToEdit = {}
   

    constructor(private router : Router, 
                private authService : AuthServiceService, 
                private bestiaireService : BestiaireService, 
                private http : HttpClient, 
                public dialog : MatDialog) {}

    ngOnInit() {
        if (this.authService.isAuth == false) {
            console.log('Looser')
            this
                .router
                .navigate(['/admin'])
        } else {
            this.userLog = this.authService.userLog
            console.log(`bienvenue ! ${this.userLog}`)
            this.onConnectionName(this.userLog)
        }

        this.getBestiaireData();
        
    }

    getBestiaireData(){
        this.bestiaireService.getBestiaire()
        .subscribe((data : Bestiaire[]) => {
            this.bestiaire = data
            this.emitBestiaire();
            console.log('Administration Bestiaire', this.bestiaire)
        })
    }

     
    onConnectionName(_user) {
        let arrayChar = _user.split('');
        let arrayResult = []
        let space = ' '
        for (let i = 0; i < arrayChar.length; i++) {
            if (arrayChar[i].match(/[A-Z]/, 'g')) {
                arrayResult.push(space);
                arrayResult.push(arrayChar[i])

            } else {
                arrayResult.push(arrayChar[i])

            }
        }
        this.userLog = arrayResult.join('')
        return this.userLog
    }

    onDeconnexion() {
        this
            .authService
            .onLogOut();
    }

    emitBestiaire() {
        this
            .bestiaireSubject
            .next(this.bestiaire.slice())
    }

    onShowBestiaire() {
        (this.showBestiaire === false)
            ? this.showBestiaire = true
            : this.showBestiaire = false;
        this.showDeco = false;
        this.showVegetal = false;
      
    }

    onShowVegetal() {
        this.showBestiaire = false;
        this.showDeco = false;
        (this.showVegetal === false)
            ? this.showVegetal = true
            : this.showVegetal = false;
    }

    onShowDeco() {
        this.showBestiaire = false;
        (this.showDeco === false)
            ? this.showDeco = true
            : this.showDeco = false;
        this.showVegetal = false;
    }

    onDeleteBestiaire(id:number, name:string){
        const idDelete =  id;
        if(confirm(`Etes vous sûr de vouloir supprimer l'oeuvre suivante :  ${name}`)){
            console.log(idDelete)
            const url = `http://localhost:4000/admin/bestiaire/delete/${idDelete}`
            console.log('url à delete', url)
            this.http.delete(url).subscribe(
                succes => {
                    console.log('success', succes)
                    this.getBestiaireData();
                },err => {
                    console.log('error', err)
                }
            )
            // setTimeout(
            //     ()=> {
            // this.getBestiaireData() }, 1000);
        }
        else{
            console.log('vous ne voulez pas supprimer finalement ! ')
        }
       
    }

    openDialogToAdd() {
    // console.log('data', data)
    let dialogRef = this.dialog.open(FormBestiaireComponent, {
          width: '600px',
          
    });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog closed: ${result}`);
          this.dialogResult = result;
          this.getBestiaireData();
        });
      }

      openDialogToEdit(data) {
        // console.log('data', data)
        let dialogRef = this.dialog.open(FormBestiaireComponent, {
              width: '600px',
              data
              
        });
        
            dialogRef.afterClosed().subscribe(result => {
              console.log(`Dialog closed: ${result}`);
              this.dialogResult = result;
              this.getBestiaireData();
            });
          }

 
   
}