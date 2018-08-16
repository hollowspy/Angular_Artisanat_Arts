import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BestiaireComponent } from './api/bestiaire/bestiaire.component';
import { VegetalComponent } from './vegetal/vegetal.component';
import { DecoComponent } from './deco/deco.component';
import { FicheBestiaireComponent } from './fiche-bestiaire/fiche-bestiaire.component';
import { formAdminComponent } from './admin/form-admin/formAdmin.component';
import { PageAdminComponent } from './admin/page-admin/page-admin.component';
import { FormBestiaireComponent } from './admin/form-bestiaire/form-bestiaire.component';



const appRoutes : Routes = [ 
  {path : 'bestiaire', component : BestiaireComponent}, 
  {path : 'bestiaire/:id', component : FicheBestiaireComponent},
  {path : 'vegetal', component : VegetalComponent},
  {path : 'deco', component : DecoComponent},
  {path : 'admin', component : formAdminComponent},
  {path : 'admin/:id', component : PageAdminComponent }
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
    
   
    
    ],
  imports: [
  BrowserModule,
  HttpClientModule,
  FormsModule,
  MatDialogModule,
  MatCardModule,
  MatButtonModule,
  BrowserAnimationsModule,
  RouterModule.forRoot(appRoutes)
  ],
  entryComponents:[
    FormBestiaireComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
