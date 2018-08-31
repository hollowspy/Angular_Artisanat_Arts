import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../service/api-service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FicheVegetal } from './../../models/ficheVegetal.model';


@Component({
  selector: 'app-form-vegetal',
  templateUrl: './form-vegetal.component.html',
  styleUrls: ['./form-vegetal.component.css']
})
export class FormVegetalComponent implements OnInit {

  vegetalForm : FormGroup
  viewForm : any

  constructor(public thisDialogRef : MatDialogRef <FormVegetalComponent>, 
              private http : HttpClient, 
              private apiService : ApiService,
              private formbuilder : FormBuilder,
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
    const name = this.vegetalForm.get('name').value;
    const materials = this.vegetalForm.get('materials').value;
    const width = this.vegetalForm.get('width').value;
    const height = this.vegetalForm.get('height').value;
    const reproduction = this.vegetalForm.get('reproduction').value;
    const newVegetal = new FicheVegetal(name, materials,width, height, reproduction, 'noUlr','noURL')
    console.log('new Vegetal', newVegetal)
    this.http.post('http://localhost:4000/admin/vegetal/new', newVegetal)
    .subscribe((res)=> { 
      this.data = res
      console.log('reponse new Vegetal', this.data)
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
    const editVegetal = new FicheVegetal(name, materials,width, height, reproduction, '','')
    console.log(editVegetal)
    this.http.put(`http://localhost:4000/admin/vegetal/edit/${id}`, editVegetal)
    .subscribe((res)=> { 
      this.data = res
      console.log('reponse modif Vegetal', this.data)
      this.thisDialogRef.close('oeuvre Vegetal modifée')
    },(err) => {
      console.log('erreur dans l\'ajout du végétal', err)
    });
  }










  onCloseCancel() {
    this
        .thisDialogRef
        .close('Cancel');
    console.log('formulaire annulé')
}


}

