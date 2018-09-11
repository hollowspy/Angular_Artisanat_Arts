export class Admin{
    constructor(
        public id:number,
        public email : string,
        public password : string,
        public passwordCheck : string,
        public firstName : string, 
        public lastName : string
    ){}
}