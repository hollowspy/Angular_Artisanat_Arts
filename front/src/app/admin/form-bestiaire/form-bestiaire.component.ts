import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FicheBestiaire} from '../../models/ficheBestiaire.models';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {BestiaireService} from '../../service/bestiaire-service';

@Component({selector: 'app-form-bestiaire', templateUrl: './form-bestiaire.component.html', styleUrls: ['./form-bestiaire.component.css']})
export class FormBestiaireComponent implements OnInit {

    
    // nameForm : string;
    // materials : string;
    // width : number;
    // height : number;
    // reproduction : string
    viewForm : void
    
    

    constructor(public thisDialogRef : MatDialogRef < FormBestiaireComponent >, private http : HttpClient, private bestiaireService : BestiaireService, @Inject(MAT_DIALOG_DATA)public data : any) {}

    ngOnInit() {
         if (this.data){
             this.viewForm = this.data;
             console.log('View Form', this.viewForm)

            //  this.nameForm = this.data.name;
            //  this.materials = this.data.materials;
            //  this.width = this.data.width;
            //  this.height = this.data.height;
            //  this.reproduction = this.data.reproduction
         }
        
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

}
