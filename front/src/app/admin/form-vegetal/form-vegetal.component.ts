import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../service/api-service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FicheVegetal } from '../../models/ficheVegetal.model';
import { UploadImageService } from '../../service/upload-image.service';
import { AdminService } from '../../service/admin-service.service';


@Component({
  selector: 'app-form-vegetal',
  templateUrl: './form-vegetal.component.html',
  styleUrls: ['./form-vegetal.component.css']
})
export class FormVegetalComponent implements OnInit {

  vegetalForm : FormGroup
  viewForm : any
  PhotoPrincipale : File = null;

  constructor(public thisDialogRef : MatDialogRef <FormVegetalComponent>, 
              private http : HttpClient, 
              private apiService : ApiService,
              private formbuilder : FormBuilder,
              private uploadImageService : UploadImageService,
              private adminService : AdminService,
              @Inject(MAT_DIALOG_DATA) public data : any
    ) { }

  ngOnInit() {
    if (this.data){
      this.viewForm = this.data
      this.vegetalForm = this.viewForm
    }
       this.initForm();
   }

  initForm(){
    if (!this.data){
      this.vegetalForm = this.formbuilder.group({
        name : ["", Validators.required], 
        materials : ["", Validators.required], 
        width : ["", Validators.required],
        height : ["", Validators.required],
        reproduction : ["", Validators.required]
      })
      
    } else {
      this.vegetalForm = this.formbuilder.group({
        name : [this.viewForm.name, Validators.required], 
        materials : [this.viewForm.materials, Validators.required], 
        width : [this.viewForm.width, Validators.required],
        height : [this.viewForm.height, Validators.required],
        reproduction : [this.viewForm.reproduction, Validators.required]
      })

    }
   
    console.log(this.vegetalForm)
  }

  onAddVegetal(){
    console.log('view Form on add', this.viewForm)
    const id = parseInt(localStorage.getItem('idConnected'))
    const name = this.vegetalForm.get('name').value;
    const materials = this.vegetalForm.get('materials').value;
    const width = this.vegetalForm.get('width').value;
    const height = this.vegetalForm.get('height').value;
    const reproduction = this.vegetalForm.get('reproduction').value;
    const newVegetal = new FicheVegetal(id, name, materials,width, height, reproduction, 'noUlr','noURL')
    console.log('new Vegetal', newVegetal)
    this.adminService.postAdmin('vegetal/new', newVegetal)
    .subscribe((res)=> { 
      this.data = res
      console.log('reponse new Vegetal', this.data)
      this.onUpload();
      this.thisDialogRef.close('oeuvre Vegetal ajoutée')
    },(err) => {
      console.log('erreur dans l\'ajout du végétal', err)
    });
  }

  onEditVegetal(id:number){
    const name = this.vegetalForm.get('name').value;
    const materials = this.vegetalForm.get('materials').value;
    const width = this.vegetalForm.get('width').value;
    const height = this.vegetalForm.get('height').value;
    const reproduction = this.vegetalForm.get('reproduction').value;
    const editVegetal = new FicheVegetal(id,name, materials,width, height, reproduction, '','')
    console.log(editVegetal)
    this.adminService.putAdmin(`vegetal/edit/${id}`, editVegetal)
    .subscribe((res)=> { 
      this.data = res
      console.log('reponse modif Vegetal', this.data)
      this.thisDialogRef.close('oeuvre Vegetal modifée')
    },(err) => {
      console.log('erreur dans l\'ajout du végétal', err)
    });
  }

  onPhotoPrincipale(event){
    this.PhotoPrincipale = <File>event.target.files[0]
    this.uploadImageService.onValidFormatImage(this.PhotoPrincipale)
    console.log('photo principale', this.PhotoPrincipale)
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
    console.log('formdata',formData)
    this.uploadImageService.onUploadImage('upload_vegetal', formData)
    .subscribe(
        (res) => {
            console.log('reponse',res)
        }, (err) => { 
          console.log('erreur', err)
          let message:any = err
          if ( message.error.error.code === 'LIMIT_FILE_SIZE'){
              alert('Taille de fichier supérieur à 3Mo. ')
          }
            
        }
    )
}










  onCloseCancel() {
    this
        .thisDialogRef
        .close('Cancel');
    console.log('formulaire annulé')
}


}

