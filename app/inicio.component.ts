import { Component, OnInit } from '@angular/core';

import { ApiService } from './services/api.services';

@Component({
    moduleId: module.id,
    selector: 'inicio',
    templateUrl: 'inicio.component.html',
    styles:[`
    .miBoton{
        width:175px;
        
    }
    `]
})

export class inicioComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}