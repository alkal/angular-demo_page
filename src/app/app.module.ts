import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatComponentsModule} from '../mat-components/mat-components.module'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialPageComponent } from './material-page/material-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalWindowComponent,
    HomePageComponent,
    NavbarComponent,
    MaterialPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatComponentsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'ngMaterial', component: MaterialPageComponent }
    ])
  ],
  providers: [
    
  ],
  //In the following array is registered all the componentsthat are addeed dynamically.
  entryComponents:[
    ModalWindowComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
