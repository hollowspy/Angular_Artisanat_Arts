import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FicheBestiaire} from '../../models/ficheBestiaire.models';
import {NgForm} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiService} from '../../service/api-service';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:4000/upload/upload_bestiaire';

@Component({selector: 'app-form-bestiaire', templateUrl: './form-bestiaire.component.html', styleUrls: ['./form-bestiaire.component.css']})
export class FormBestiaireComponent implements OnInit {

    
    viewForm : Object
    PhotoPrincipale : File = null;
    PhotoAnnexe2 : File = null;
    PhotoAnnexe3 : File = null;
    PhotoAnnexe4 : File = null;
    PhotoAnnexe5 : File = null;
    PhotoAnnexe6 : File = null;

    public uploader:FileUploader = new FileUploader({url: URL});
    
    constructor(public thisDialogRef : MatDialogRef < FormBestiaireComponent >, 
                private http : HttpClient, private apiService : ApiService, 
                @Inject(MAT_DIALOG_DATA)public data : any) {}

    ngOnInit() {
         if (this.data){
             this.viewForm = this.data;
             console.log('View Form', this.viewForm)
         
         } 
         else {
             this.viewForm = new FicheBestiaire('', '',0,0, '', '', '', '', '', '');
         }

         this.uploader.onBeforeUploadItem = (item)=> {console.log("Item"); console.log(item)};

         this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false;};
 
        this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
              console.log("ImageUpload:uploaded:", item, status, response);
         };
        
    }

    OnAddBestiaire(form : NgForm) {
        console.log('je rentre dans add Bestiaire formulaire');
        const newBestiaire = new FicheBestiaire('', '', 0, 0, '', '', '', '', '', '');
        newBestiaire.name = form.value['name'];
        newBestiaire.materials = form.value['materials'];
        newBestiaire.width = form.value['width'];
        newBestiaire.height = form.value['height'];
        newBestiaire.reproduction = form.value['reproduction']
        console.log(newBestiaire)
        this
            .http
            .post('http://localhost:4000/admin/bestiaire/new', newBestiaire)
            .subscribe((res) => {
                this.data = res
                console.log('reponse new Bestiaire', this.data)
                this
                    .thisDialogRef
                    .close('Oeuvre Ajoutee')
            }, (err) => {
                console.log('erreur dans le formulaire', err)
            })

    }

    onEditBestiaire(form : NgForm, id:number) {
        console.log('je vais modifier cette oeuvre', form)
        const editBestiaire =  new FicheBestiaire('', '', 0, 0, '', '', '', '', '', '');
        editBestiaire.name = form.value['name'];
        editBestiaire.materials = form.value['materials'];
        editBestiaire.width = form.value['width'];
        editBestiaire.height = form.value['height'];
        editBestiaire.reproduction = form.value['reproduction']
        const idEditBestiaire = id;
        console.log(editBestiaire)
        this.http.put(`http://localhost:4000/admin/bestiaire/edit/${id}`, editBestiaire)
        .subscribe(
            (res) => {
                this.data = res
                console.log('reponse modif bestiaire', this.data)
                this.thisDialogRef.close('oeuvre modifié')
            }, (err) => {
                console.log('erreur dans la modif', err)
            }
        )
       
    }

    onCloseCancel() {
        this
            .thisDialogRef
            .close('Cancel');
        console.log('formulaire annulé')
    }

    onTest(){
        console.log('test second fonction')
    }


    onPhotoPrincipale(event){
        this.PhotoPrincipale = <File>event.target.files[0]
        console.log('photo principale', this.PhotoPrincipale)
    }
    onFileChanged(event) {
        console.log('longueur',event.target.files.length)
        this.PhotoAnnexe2 = <File>event.target.files[0]
        this.PhotoAnnexe3 = <File>event.target.files[1]
        console.log('PhotoAnnexe2', this.PhotoAnnexe2)
        console.log('PhotoAnnexe3', this.PhotoAnnexe3)

    }

    onUpload(){
        console.log('je rentre dans onUpload')
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'multipart/form-data'
            })
          };
          const formData = new FormData();
          formData.append('file', this.PhotoPrincipale, this.PhotoPrincipale.name)
          formData.append('file', this.PhotoAnnexe2, this.PhotoAnnexe2.name)
          formData.append('file', this.PhotoAnnexe3, this.PhotoAnnexe3.name)
          this.http.post('http://localhost:4000/upload/upload_bestiaire', formData)
          .subscribe(
              (res) => {
                  console.log('reponse',res)
              }, (err) => { 
                  console.log('erreur', err)
              }
          )
    }
}
