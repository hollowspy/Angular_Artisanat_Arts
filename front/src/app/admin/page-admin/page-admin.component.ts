import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth-service.service';
import {ApiService} from '../../service/api-service';
import {Bestiaire} from '../../models/bestiaire.model';
import {Subject} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { FormBestiaireComponent } from '../form-bestiaire/form-bestiaire.component';
import { FicheVegetal } from './../../models/ficheVegetal.model';
import { FormVegetalComponent } from './../form-vegetal/form-vegetal.component';
import { Carousel } from './../../models/carouse.model';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:4000/file/upload';


@Component({selector: 'app-page-admin', 
            templateUrl: './page-admin.component.html', 
            styleUrls: ['./page-admin.component.css']})

export class PageAdminComponent implements OnInit {
  
  
  public uploader:FileUploader = new FileUploader({url: URL});
  
   

    userLog = ''
    private bestiaire : Bestiaire[];
    bestiaireSubject = new Subject < any[] > ();
    private vegetal : FicheVegetal[];
    vegetalSubject = new Subject <any[] > ();
    private carousel  : Carousel[];
    carouselSubject = new Subject <any[]> ();
    showBestiaire : boolean = false;
    showDeco : boolean = false;
    showVegetal : boolean = false;
    showCarousel : boolean = false;
    dialogResult = "";
    ficheToEdit = {}; 
    SelectedFile : File = null;
   

    constructor(private router : Router, 
                private authService : AuthService, 
                private apiService : ApiService, 
                private http : HttpClient, 
                public dialog : MatDialog
                ) {}

    ngOnInit() {
        // if (this.authService.isAuth == false) {
        //     console.log('Looser')
        //     this
        //         .router
        //         .navigate(['/admin'])
        // } else {
        //     this.userLog = this.authService.userLog
        //     console.log(`bienvenue ! ${this.userLog}`)
        //     this.onConnectionName(this.userLog)
        // }
        
        this.isAuthenticate();
        this.onConnectionName(this.userLog)
        this.getBestiaireData();
        this.getVegetalData();
        this.getCarouselData()   

             
        
    }


    isAuthenticate(){
       this.authService.isToken();
    }
    
    
    getBestiaireData(){
        this.apiService.getApi('bestiaire')
        .subscribe((data : Bestiaire[]) => {
            this.bestiaire = data;
            this.emitBestiaire();
           // console.log('Administration Bestiaire', this.bestiaire)
        })
    }

    emitBestiaire() {
        this
            .bestiaireSubject
            .next(this.bestiaire.slice())
    }

    getVegetalData(){
        this.apiService.getApi('vegetal')
        .subscribe(
            (data : FicheVegetal[]) => { 
                this.vegetal = data;
                this.emitVegetal();
               // console.log('Admin Vegetal', this.vegetal)
            }
        )
    }

    emitVegetal(){
        this.vegetalSubject.next(this.vegetal.slice())
    }


    getCarouselData(){
        this.apiService.getApi('carousel')
        .subscribe(
            (data : Carousel[]) => {
                this.carousel = data;
                this.emitCarousel();
            })
       }

       emitCarousel(){
           this.carouselSubject.next(this.carousel.slice())
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

  

    onShowBestiaire() {
        (this.showBestiaire === false)
            ? this.showBestiaire = true
            : this.showBestiaire = false;
        this.showDeco = false;
        this.showVegetal = false;
        this.showCarousel = false;
      
    }

    onShowVegetal() {
        this.showBestiaire = false;
        this.showDeco = false;
        (this.showVegetal === false)
            ? this.showVegetal = true
            : this.showVegetal = false;
            this.showCarousel = false;
    }

    onShowDeco() {
        this.showBestiaire = false;
        (this.showDeco === false)
            ? this.showDeco = true
            : this.showDeco = false;
        this.showVegetal = false;
        this.showCarousel = false;
    }

    onShowCarousel(){
        this.showBestiaire = false;
        this.showDeco = false;
        (this.showCarousel === false)
            ? this.showCarousel = true
            : this.showCarousel = false;
        this.showVegetal = false;

    }

    onDeleteOeuvre(categorie:string, id:number, name:string){
        const idDelete =  id;
        if(confirm(`Etes vous sûr de vouloir supprimer l'oeuvre suivante :  ${name}`)){
            console.log('id a supprimer', idDelete)
            console.log('categorie a supprimer', categorie)
            const url = `http://localhost:4000/admin/${categorie}/delete/${idDelete}`
            console.log('url à delete', url)
            this.http.delete(url).subscribe(
                succes => {
                    console.log('success', succes)
                    switch (categorie) {
                        case 'bestiaire':
                        this.getBestiaireData();
                            break;
                        case 'vegetal':
                        this.getVegetalData();
                            break
                        default:
                        alert('data non reactualisée')
                            break;
                    }
                   
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

    openDialogToAddBestiaire() {
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
 
        openDialogToEditBestiaire(data) {
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


          openDialogToAddVegetal(){
            let dialogRef = this.dialog.open(FormVegetalComponent, {
                width: '600px',
            });
          
              dialogRef.afterClosed().subscribe(result => {
                console.log(`Dialog closed: ${result}`);
                this.dialogResult = result;
                this.getVegetalData();
              });

          }

          openDialogToEditVegetal(data) {
            // console.log('data', data)
            let dialogRef = this.dialog.open(FormVegetalComponent, {
                  width: '600px',
                  data
                  
            });
            
                dialogRef.afterClosed().subscribe(result => {
                  console.log(`Dialog closed: ${result}`);
                  this.dialogResult = result;
                  this.getVegetalData();
                });
              }


              onNavigateNewUser(){
                  this.router.navigate(['/admin', 'newuser'])
              }


              onFileChanged(event) {
                this.SelectedFile = <File>event.target.files[0]
                console.log('fichier choisit', this.SelectedFile)
              }

              onUpload(id:any){
                const httpOptions = {
                    headers: new HttpHeaders({
                      'Content-Type':  'multipart/form-data'
                    })
                  };
                console.log('test id upload', id)
                const formData = new FormData(); // Currently empty
                if (this.SelectedFile !== null){
                    formData.append('file', this.SelectedFile, this.SelectedFile.name)
                    formData.append('id', id)
                                   
                    this.http.post('http://localhost:4000/file/upload', formData)
                    .subscribe(
                          (res) => {
                            const message:any = res
                            console.log(message.message)
                            if (message.message === 'source photo MAJ'){
                                alert('Photo mise à jour ')
    
                            }
                            else {
                                console.log(message.message)
                                alert('Pas de mise à jour')
                            }
                          }, (err) => {
                              console.log(err)
                          }
                        
                        )
                    this.getCarouselData()  
                 }
                 else{
                     alert('merci de bien vouloir selectionner un fichier au préalable')
                 }
                }
             
                
            
   
}
