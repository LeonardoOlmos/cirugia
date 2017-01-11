import { Component, OnInit } from '@angular/core';

import {ApiService } from './services/api.services';

@Component({
    moduleId: module.id,
    selector: 'pruebas',
    templateUrl: 'pruebas.component.html',
    styles: [`
    .container{
        margin-top:30px;
    }`]
})

export class pruebasComponent implements OnInit {
    constructor(private api:ApiService) { }

    ngOnInit() { }

    ejecutar () {
        this.api.ejecutar().subscribe(
            res => {console.log(res);
            });
}
}

