export class FicheBestiaire{ 
    constructor(
        public name : string,
        public materials : string,
        public width : number,
        public height : number, 
        public reproduction : string,
        public photo_principale : string,
        public photo_annexe2 : string,
        public photo_annexe3 : string,
        public photo_annexe4 : string,
        public photo_annexe5 : string,
        public owner:number

    ){}
}