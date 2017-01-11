import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CirujanoFormComponent } from './cirujano-form.component';
import { loginComponent } from './login.component';
import { pruebasComponent } from './pruebas.component';
import { inicioComponent } from './inicio.component';

import { ApiService } from './services/api.services';

import { RouterModule }   from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
     path: '',
     redirectTo: '/inicio',
     pathMatch: 'full'
    },
    {
     path: 'inicio',
     component: inicioComponent     
    },
    {
     path: 'registro',
     component: CirujanoFormComponent
    },
    {
     path: 'login',
     component: loginComponent   
    }
    ,
    {
      path: 'pruebas',
      component: pruebasComponent
    }
  ])
  ],
  declarations: [
    AppComponent,
    CirujanoFormComponent,
    loginComponent,
    pruebasComponent,
    inicioComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ ApiService ],
})

export class AppModule { }

