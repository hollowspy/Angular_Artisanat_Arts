import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule, MatSnackBarModule, MatProgressBarModule } from '@angular/material';
import {MatCardModule} from '@angular/material';
import {NgbModule, NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule,  MatFormFieldControl } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';


import { AuthGardService } from './service/auth-gard.service';
import { AuthGardServiceNewUser } from './service/auth-gard-newuser.service';
import { AdminService } from './service/admin-service.service';
import { ApiService } from './service/api-service';
import { SnackbarService } from './service/snackbar.service';
import { UploadImageService } from './service/upload-image.service';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BestiaireComponent } from './api/bestiaire/bestiaire.component';
import { VegetalComponent } from './api/vegetal/vegetal.component';
import { DecoComponent } from './api/deco/deco.component';
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
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultSearchComponent } from './result-search/result-search.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { ModalDecoComponent } from './modal-deco/modal-deco.component';



const appRoutes : Routes = [ 
  {path : 'bestiaire', component : BestiaireComponent}, 
  {path : 'bestiaire/:id', component : FicheBestiaireComponent},
  {path : 'vegetal', component : VegetalComponent},
  {path : 'deco', component : DecoComponent},
  {path : 'auth', component : formAdminComponent},
  {path : 'admin', canActivate:[AuthGardService], component : PageAdminComponent },
  {path : 'admin/newuser', canActivate:[AuthGardServiceNewUser], component : NewUserComponent},
  {path : 'auth/forgotPassword', component : ForgotPasswordComponent},
  {path : 'auth/:token/updatePassword', component : UpdatePasswordComponent},
  {path : 'search', component : ResultSearchComponent}, 
  {path : '', redirectTo:'/', pathMatch:'full'}, 
  {path : '**', redirectTo:'/'}
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
    FooterComponent,
    SearchBarComponent,
    ResultSearchComponent,
    NavbarMobileComponent,
    ModalDecoComponent,
    ],
    
  imports: [
BrowserModule,
  HttpClientModule,
  FormsModule,
  MatDialogModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  BrowserAnimationsModule,
  NgbModule,
  ReactiveFormsModule,
  MatIconModule,
  MatSnackBarModule,
  MatProgressBarModule,
  NgbProgressbarModule,
  RouterModule.forRoot(appRoutes)
  ],
  entryComponents:[
    FormBestiaireComponent,
    ModalFicheComponent,
    ModalVegetalComponent,
    FormVegetalComponent,
    SearchBarComponent, 
    ModalDecoComponent
  ],
  providers: [AuthGardService, 
    AdminService, 
    ApiService, 
    SnackbarService, 
    UploadImageService, 
    AuthGardServiceNewUser,
    CookieService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
