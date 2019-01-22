import {Component, OnInit} from '@angular/core';
import {ApiService} from '../service/api-service';
import {FicheBestiaire} from '../models/ficheBestiaire.models'
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import {ModalFicheComponent} from './modal-fiche/modal-fiche.component'


@Component({selector: 'app-fiche-bestiaire', templateUrl: './fiche-bestiaire.component.html', styleUrls: ['./fiche-bestiaire.component.css']})
export class FicheBestiaireComponent implements OnInit {

    constructor(private apiService : ApiService, 
                private route : ActivatedRoute, 
                private router : Router,
                public dialog : MatDialog) {}

    ficheBestiaire : FicheBestiaire;
    id:number = this.route.snapshot.params['id'];
    photoPrincipale : string = ''; 
    photoPrincipaleAnnexe : string = ''
    photo_Annexe2 : string = '';
    photo_Annexe3 : string = '';
    photo_Annexe4 : string = '';
    dialogResult = "";
   

    ngOnInit() {
        this
            .apiService
            .getFicheApi('bestiaire', this.id)
            .subscribe((data : FicheBestiaire) => {
                this.ficheBestiaire = data[0]
                console.log('fiche bestiaire', this.ficheBestiaire)
            this.photoPrincipale = data[0].Aphoto_principale
            this.photoPrincipaleAnnexe = data[0].Aphoto_principale
            this.photo_Annexe2 = data[0].Aphoto_annexe2; 
            this.photo_Annexe3 = data[0].Aphoto_annexe3; 
            this.photo_Annexe4 = data[0].Aphoto_annexe4; 
           
                
            })
    }

    onReplacePhotoPrincipale(url){
        this.photoPrincipale = url;
    }

    openDialog(srcPhotoPrincipale, ficheBestiaire){
       let data = []
        data[0] = srcPhotoPrincipale; 
        data[1] = ficheBestiaire
        console.log('data avt modal', data[1].id)
        
        const dialogConfig = new MatDialogConfig();
        dialogConfig.panelClass = 'modalBestiaire', 
        dialogConfig.backdropClass = 'bestiaireModal', 
        dialogConfig.width = '100vw', 
        dialogConfig.data = data
        console.log('je rentre dans openDialog')
        let dialogRef = this.dialog.open(ModalFicheComponent, dialogConfig); 

        


        dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog closed: ${result}`);
        this.dialogResult = result;
        });
    }
   

    
}
