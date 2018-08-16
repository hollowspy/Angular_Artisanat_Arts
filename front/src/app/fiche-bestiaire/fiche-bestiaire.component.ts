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
    
    ngOnInit() {
        this
            .bestiaireService
            .getFicheBestiaire(this.id)
            .subscribe((data : FicheBestiaire) => {
                this.ficheBestiaire = data
                console.log('donnée fiche bestiaire', this.ficheBestiaire)
            let photoPrincipale = data[0].photo_principale
            console.log('test', photoPrincipale)
                
            })
    }

}
