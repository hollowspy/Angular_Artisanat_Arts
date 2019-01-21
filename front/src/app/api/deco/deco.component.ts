import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../service/api-service'; 
import { MatDialog } from '@angular/material';
import { ModalDecoComponent } from '../../modal-deco/modal-deco.component';



@Component({
  selector: 'app-deco',
  templateUrl: './deco.component.html',
  styleUrls: ['./deco.component.css']
})
export class DecoComponent implements OnInit {

  results:any = []
  deco = []; 
  dialogResult:string= "";

  constructor(private ApiService : ApiService,
              public dialog:MatDialog) { }

  imgColA1:string = ''; 
  imgColA2:string = ''; 
  imgColA3:string = '';
  imgColA4:string = ''; 
  imgColA5:string = '';
  imgColB1:string = '';
  imgColB2:string = '';
  imgColB3:string = '';
  imgColB4:string = '';
  imgColB5:string = '';
  imgColC1:string = '';
  imgColC2:string = '';
  imgColC3:string = '';
  imgColC4:string = '';
  imgColC5:string = '';
  imgColD1:string = '';
  imgColD2:string = '';
  imgColD3:string = '';
  imgColD4:string = '';
  imgColD5:string = '';


  ngOnInit() {
    this.getDecoData()
  }

  getDecoData(){
    this.ApiService.postApi('deco', null)
    .subscribe((res) => {
      this.deco = res; 
      this.imgColA1 = this.deco[0].Aphoto_principale
      this.imgColA2 = this.deco[7].Aphoto_annexe2
      this.imgColA3 = this.deco[4].Aphoto_annexe2
      this.imgColA4 = this.deco[5].Aphoto_principale
      this.imgColA5 = this.deco[11].Aphoto_principale
      this.imgColB1 = this.deco[1].Aphoto_annexe2
      this.imgColB2 = this.deco[2].Aphoto_principale
      this.imgColB3 = this.deco[3].Aphoto_annexe2
      this.imgColB4 = this.deco[6].Aphoto_principale
      this.imgColB5 = this.deco[8].Aphoto_principale
      this.imgColC1 = this.deco[3].Aphoto_principale
      this.imgColC2 = this.deco[7].Aphoto_principale
      this.imgColC3 = this.deco[9].Aphoto_principale
      this.imgColC4 = this.deco[1].Aphoto_annexe2
      this.imgColC5 = this.deco[2].Aphoto_annexe2
      this.imgColD1 = this.deco[6].Aphoto_principale
      this.imgColD2 = this.deco[4].Aphoto_principale
      this.imgColD3 = this.deco[0].Aphoto_annexe2
      this.imgColD4 = this.deco[8].Aphoto_annexe2
      this.imgColD5 =  this.deco[10].Aphoto_principale
      console.log('déco', this.deco)
      console.log('imgAcol1', this.imgColA1)
    }, (err) => {
      console.log('erreur', err)
    })
  }

  openDialog(oeuvre, srcPhoto){
    // let data = {
    //   oeuvre : oeuvre, 
    //   srcPhoto : srcPhoto
    // }
    let data = []; 
    data[0] = oeuvre; 
    data[1] = srcPhoto
    // console.log('dans deco Component', data)
    
    // console.log('je rentre dans ModalDeco', oeuvre, srcPhoto )
    let dialogRef = this.dialog.open(ModalDecoComponent, {
      width : '100vw', 
      data

    })

    dialogRef.afterClosed().subscribe(res => {
      console.log(`dialog closed : ${res}`)
      this.dialogResult = res
    })
  }
}
