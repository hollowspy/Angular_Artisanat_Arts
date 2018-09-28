import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UploadImageService {

    constructor(private http:HttpClient) {}


    onUploadImage(url:string, form){
        return this.http.post(`http://localhost:4000/upload/${url}`, form)
    }

    onValidFormatImage(file : File) {
        console.log('file dans service valid', file)
        if (file.type !== 'image/jpg' && file.type !== 'image/jpeg') {
            alert('Format image accepte : jpg, jpeg ou png')
            file = null;
        } else {
            if (file.size > 3000000) {
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
                if (file[i].size > 3000000) {
                    alert(`Photo concernée ${file[i].name}: Photo supérieur à 3Mo. Merci de choisir une photo inferieur à ce poids`)
                    file[i] = null;
                } else {
                    console.log('fichier choisit', file[i])
                }
            }
            
        }
    }

}