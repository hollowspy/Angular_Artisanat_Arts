import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth-service.service';
import {ApiService} from '../../service/api-service';
import {Bestiaire} from '../../models/bestiaire.model';
import {Subject} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { FormBestiaireComponent } from '../form-bestiaire/form-bestiaire.component';
import { FicheVegetal } from '../../models/ficheVegetal.model';
import { FormVegetalComponent } from '../form-vegetal/form-vegetal.component';
import { Carousel } from '../../models/carouse.model';
import { UploadImageService } from '../../service/upload-image.service';


@Component({selector: 'app-page-admin', 
            templateUrl: './page-admin.component.html', 
            styleUrls: ['./page-admin.component.css']})

export class PageAdminComponent implements OnInit {
  
  
    
    firstName:string;
    lastName:string;
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
    owner = localStorage.getItem('idConnected')
    isSuperAdmin:boolean = false;   
   

    constructor(private router : Router, 
                private authService : AuthService, 
                private apiService : ApiService, 
                private http : HttpClient, 
                public dialog : MatDialog, 
                private uploadImageService : UploadImageService
                ) {}

    ngOnInit() {
         
        this.isAuthenticate();
        this.getBestiaireData();
        this.getVegetalData();
        this.getCarouselData();
    }


    isAuthenticate(){
       this.authService.isToken();
       this.firstName = this.authService.firstName;
       this.lastName = this.authService.lastName;
       console.log('page admin auth', this.firstName, this.lastName)
    }
    
    
    getBestiaireData(){
        this.apiService.postApi('bestiaire', this.owner)
        .subscribe((data : Bestiaire[]) => {
            this.bestiaire = data;
            this.emitBestiaire();
        })
    }

    emitBestiaire() {
        this
            .bestiaireSubject
            .next(this.bestiaire.slice())
    }

    getVegetalData(){
        this.apiService.postApi('vegetal', this.owner)
        .subscribe(
            (data : FicheVegetal[]) => { 
                this.vegetal = data;
                this.emitVegetal();
            }
        )
    }

    emitVegetal(){
        this.vegetalSubject.next(this.vegetal.slice())
    }


    getCarouselData(){
             this.apiService.postApi('carousel', null)
            .subscribe(
                (data : Carousel[]) => {
                    this.carousel = data;
                    this.emitCarousel();
                })
            if (localStorage.getItem('idConnected') === '0'){
                this.isSuperAdmin = true;
            } else {
                this.isSuperAdmin = false;
            }
        
       
       }

       emitCarousel(){
           this.carouselSubject.next(this.carousel.slice())
       }
    

    onDeconnexion() {
        this.authService.onLogOut();
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
        }
        else{
            console.log('vous ne voulez pas supprimer finalement ! ')
        }
       
    }

    openDialogToAddBestiaire() {
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


            onFileChanged(event){
                this.SelectedFile = <File>event.target.files[0]
                console.log('type fichier page admin', this.SelectedFile)
                this.uploadImageService.onValidFormatImage(this.SelectedFile)
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
                    this.uploadImageService.onUploadImage('upload_carousel', formData )
                    .subscribe(
                          (res) => {
                            let message:any = res
                            console.log(message.message)
                            if (message.message === 'source photo MAJ'){
                                alert('Photo mise à jour ')
                                this.getCarouselData()  
                                this.SelectedFile = null;
    
                            }
                            else {
                                console.log(message.message)
                                alert('Pas de mise à jour')
                                 
                            }
                          }, (err) => {
                            let message:any = err
                            console.log('message erreur', message)
                            if(message.error.formatImage === true){
                                alert('pb de format d\'image')
                            }
                            
                            if ( message.error.error.code === 'LIMIT_FILE_SIZE'){
                                alert('Taille de fichier supérieur à 3Mo. ')
                            }
                                                       
                          }
                        
                        )
                    this.getCarouselData()  
                 }
                 else{
                     alert('merci de bien vouloir selectionner un fichier au préalable')
                 }
                }
             
                
            
   
}
