import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

import {ApiService } from './services/api.services';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'

})

export class loginComponent implements OnInit {
    constructor(private api:ApiService, private router:Router) { }

     model = new Usuario('', '');

    ngOnInit() { }

  logIn() {
    let usuario = new Usuario( this.model.usuario, this.model.contrasena);
    
    this.api.logIn(usuario).subscribe(
    res => {console.log(res);
        if (res.exito)
        {
            this.router.navigate(['/pruebas']);
        }
}
                                    );
}

submitted = false;

onSubmit() {

   this.logIn();
   this.submitted = true; }
}