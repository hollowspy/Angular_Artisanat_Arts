import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BestiaireComponent } from './api/bestiaire/bestiaire.component';
import { VegetalComponent } from './api/vegetal/vegetal.component';
import { DecoComponent } from './deco/deco.component';
import { FicheBestiaireComponent } from './fiche-bestiaire/fiche-bestiaire.component';
import { formAdminComponent } from './admin/form-admin/formAdmin.component';
import { PageAdminComponent } from './admin/page-admin/page-admin.component';
import { FormBestiaireComponent } from './admin/form-bestiaire/form-bestiaire.component';
import { ColumnArtisanatComponent } from './home/column-artisanat/column-artisanat.component';
import { MenuComponent } from './home/menu/menu.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { CardMurielComponent } from './home/card-muriel/card-muriel.component';
import { FormContactComponent } from './home/form-contact/form-contact.component';
import { ModalFicheComponent } from './fiche-bestiaire/modal-fiche/modal-fiche.component';
import { ModalVegetalComponent } from './modal-vegetal/modal-vegetal.component';
import { FormVegetalComponent } from './admin/form-vegetal/form-vegetal.component';
import { NewUserComponent } from './admin/new-user/new-user.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { UpdatePasswordComponent } from './admin/update-password/update-password.component';
import { FileUploadModule } from 'ng2-file-upload';



const appRoutes : Routes = [ 
  {path : 'bestiaire', component : BestiaireComponent}, 
  {path : 'bestiaire/:id', component : FicheBestiaireComponent},
  {path : 'vegetal', component : VegetalComponent},
  {path : 'deco', component : DecoComponent},
  {path : 'auth', component : formAdminComponent},
  {path : 'admin', component : PageAdminComponent },
  {path : 'admin/newuser', component : NewUserComponent},
  {path : 'auth/forgotPassword', component : ForgotPasswordComponent},
  {path : 'auth/:token/updatePassword', component : UpdatePasswordComponent}
  
 
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BestiaireComponent,
    VegetalComponent,
    DecoComponent,
    FicheBestiaireComponent,
    formAdminComponent,
    PageAdminComponent,
    FormBestiaireComponent,
    ColumnArtisanatComponent,
    MenuComponent,
    CarouselComponent,
    CardMurielComponent,
    FormContactComponent,
    ModalFicheComponent,
    ModalVegetalComponent,
    FormVegetalComponent,
    NewUserComponent,
    ForgotPasswordComponent,
    UpdatePasswordComponent,
       
    ],
    
  imports: [
  BrowserModule,
  HttpClientModule,
  FormsModule,
  MatDialogModule,
  MatCardModule,
  MatButtonModule,
  BrowserAnimationsModule,
  NgbModule,
  ReactiveFormsModule,
  FileUploadModule,
  RouterModule.forRoot(appRoutes)
  ],
  entryComponents:[
    FormBestiaireComponent,
    ModalFicheComponent,
    ModalVegetalComponent,
    FormVegetalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
