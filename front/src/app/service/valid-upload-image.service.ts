import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ValidUploadImageService {

    constructor() {}

    onValidFormatImage(file : File) {
        console.log('file dans service valid', file)
        if (file.type !== 'image/jpg' && file.type !== 'image/jpeg') {
            alert('Format image accepte : jpg, jpeg ou png')
            file = null;
        } else {
            if (file.size > 300000) {
                alert('Photo supérieur à 3Mo. Merci de choisir une photo inferieur à ce poids')
                file = null;
            } else {
                console.log('fichier choisit', file)
            }
        }
    }

    onValidFormatImages(file:File[]){
        for (let i = 0; i < file.length; i++) {
            if (file[i].type !== 'image/jpg' && file[i].type !== 'image/jpeg') {
                alert('Format image accepte : jpg, jpeg ou png')
                file = null;
            } else {
                if (file[i].size > 300000) {
                    alert(`Photo concernée ${file[i].name}: Photo supérieur à 3Mo. Merci de choisir une photo inferieur à ce poids`)
                    file[i] = null;
                } else {
                    console.log('fichier choisit', file[i])
                }
            }
            
        }
    }

}
