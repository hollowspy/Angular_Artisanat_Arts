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
import { CookieService } from 'ngx-cookie-service';

@Component({selector: 'app-page-admin', 
            templateUrl: './page-admin.component.html', 
            styleUrls: ['./page-admin.component.css']})

export class PageAdminComponent implements OnInit {
  
  
    
    firstName:string = this.cookieService.get('firstName');
    lastName:string = this.cookieService.get('lastName');
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
    owner:string = this.cookieService.get('idconnected');
   
    
    isSuperAdmin:boolean = false;   
   

    constructor(private router : Router, 
                private authService : AuthService, 
                private apiService : ApiService, 
                private http : HttpClient, 
                public dialog : MatDialog, 
                private uploadImageService : UploadImageService,
                private cookieService: CookieService
                ) {}

    ngOnInit() {
        this.isAuthenticate();
        this.getBestiaireData();
        this.getVegetalData();
        this.getCarouselData();
           
        
    }


    isAuthenticate(){
        console.log('page admin auth', this.firstName, this.lastName);
        this.owner === '0' ? this.isSuperAdmin = true : this.isSuperAdmin = false;
        console.log('super Admin', this.isSuperAdmin)
        
       
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
            if (this.owner === '0'){
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
        if (this.onSessionActive()){
            (this.showBestiaire === false)
            ? this.showBestiaire = true
            : this.showBestiaire = false;
        this.showDeco = false;
        this.showVegetal = false;
        this.showCarousel = false;
        }
        else {
            alert ('Vous devez vous reconnecter ! ')
            this.authService.onLogOut()
        }
      
      
    }

    onShowVegetal() {
        if (this.onSessionActive()){
            this.showBestiaire = false;
            this.showDeco = false;
            (this.showVegetal === false)
                ? this.showVegetal = true
                : this.showVegetal = false;
                this.showCarousel = false;
        } else {
            alert ('Vous devez vous reconnecter ! ')
            this.authService.onLogOut() 
        }
       
    }

    onShowDeco() {
        if (this.onSessionActive()){
            this.showBestiaire = false;
            (this.showDeco === false)
                ? this.showDeco = true
                : this.showDeco = false;
            this.showVegetal = false;
            this.showCarousel = false;
        } else {
            alert ('Vous devez vous reconnecter ! ')
            this.authService.onLogOut()   
        }
      
    }

    onShowCarousel(){
        if (this.onSessionActive()){
            this.showBestiaire = false;
            this.showDeco = false;
            (this.showCarousel === false)
                ? this.showCarousel = true
                : this.showCarousel = false;
            this.showVegetal = false;
        } else {
            alert ('Vous devez vous reconnecter ! ')
            this.authService.onLogOut()   
        }
    }

    onDeleteOeuvre(categorie:string, id:number, name:string){
        if (this.onSessionActive()){
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
        } else {
            alert ('Vous devez vous reconnecter ! ')
            this.authService.onLogOut()   
        }
        
       
    }

    openDialogToAddBestiaire(){
    if (this.onSessionActive()){
        let dialogRef = this.dialog.open(FormBestiaireComponent, {
            width: '600px',
        });
      
          dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog closed: ${result}`);
            this.dialogResult = result;
            this.getBestiaireData();
          });

        } else {
            alert ('Vous devez vous reconnecter ! ')
            this.authService.onLogOut()   
        }
   
    }
 
        openDialogToEditBestiaire(data) {
        if (this.onSessionActive()){ 
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
        else {
            alert ('Vous devez vous reconnecter ! ')
            this.authService.onLogOut()   
            }
      
        }


          openDialogToAddVegetal(){
            if (this.onSessionActive()){
                let dialogRef = this.dialog.open(FormVegetalComponent, {
                    width: '600px',
                });
              
                  dialogRef.afterClosed().subscribe(result => {
                    console.log(`Dialog closed: ${result}`);
                    this.dialogResult = result;
                    this.getVegetalData();
                  });
            } else { 
            alert ('Vous devez vous reconnecter ! ')
            this.authService.onLogOut()     
            }
        

          }

          openDialogToEditVegetal(data) {
            if (this.onSessionActive()){
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
            else {
            alert ('Vous devez vous reconnecter ! ')
            this.authService.onLogOut()    
            }
          
         
              }


              onNavigateNewUser(){
                  console.log('owner', this.owner, typeof this.owner)
                  if (this.owner === '0'){ 
                      this.isSuperAdmin = true
                      this.router.navigate(['/admin', 'newuser'])
                  }
                  
              }


            onFileChanged(event){
                if (this.onSessionActive()){
                    this.SelectedFile = <File>event.target.files[0]
                    console.log('type fichier page admin', this.SelectedFile)
                    this.uploadImageService.onValidFormatImage(this.SelectedFile)
                } else {
                    alert ('Vous devez vous reconnecter ! ')
                    this.authService.onLogOut()     
                }
               
              }

              onUpload(id:any){
                if (this.onSessionActive()){
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
                } else {
                    alert ('Vous devez vous reconnecter ! ')
                    this.authService.onLogOut()     
                }
                
                }


                    
            onSessionActive(){
                // console.log('ca fonctionne ! ')
                if (this.cookieService.check('idconnected')){
                    console.log('true')
                    return true
                    } 
                return false
                }
}
