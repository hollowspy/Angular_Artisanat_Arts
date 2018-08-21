import {Component, OnInit} from '@angular/core';
import {BestiaireService} from '../service/bestiaire-service';
import {FicheBestiaire} from '../models/ficheBestiaire.models'
import { ActivatedRoute, Router } from '@angular/router';

@Component({selector: 'app-fiche-bestiaire', templateUrl: './fiche-bestiaire.component.html', styleUrls: ['./fiche-bestiaire.component.css']})
export class FicheBestiaireComponent implements OnInit {

    constructor(private bestiaireService : BestiaireService, 
                private route : ActivatedRoute, 
                private router : Router) {}

    ficheBestiaire : FicheBestiaire;
    id:number = this.route.snapshot.params['id'];
    photoPrincipale : string = ''; 
    photoPrincipaleAnnexe : string = ''
    photo_Annexe2 : string = '';
    photo_Annexe3 : string = '';
    photo_Annexe4 : string = '';
   

    ngOnInit() {
        this
            .bestiaireService
            .getFicheBestiaire(this.id)
            .subscribe((data : FicheBestiaire) => {
                this.ficheBestiaire = data
                console.log('donnée fiche bestiaire', this.ficheBestiaire)
            this.photoPrincipale = data[0].Aphoto_principale
            this.photoPrincipaleAnnexe = data[0].Aphoto_principale
            this.photo_Annexe2 = data[0].Aphoto_annexe2; 
            this.photo_Annexe3 = data[0].Aphoto_annexe3; 
            this.photo_Annexe4 = data[0].Aphoto_annexe4; 
            console.log('photoPrincipale', this.photoPrincipale)
                
            })
    }

    onReplacePhotoPrincipale(url){
        this.photoPrincipale = url;
    }

    
}
