import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Cirujano }    from '../cirujano';
import { Usuario } from '../usuario';

@Injectable()
export class ApiService {
        usuario_id: string;
        headers = new Headers({'Content-Type':'application/json'});
        options = new RequestOptions({headers:this.headers});

    addCirujano(cirujano:Cirujano):Observable<any>{

        return this.http.post('http://localhost:8080/api/cirujano',{cirujano},this.options).
        map((res:Response)=>{return res.json()}).catch(this.errorHandler);

    };

   getCirujanos(){
       return this.http.get('http://localhost:8080/api/cirujano').
       map((res:Response)=>{console.log(res.json())}).catch(this.errorHandler);
   };

   logIn(usuario:Usuario){        
        return this.http.post('http://localhost:8080/api/logIn',{usuario},this.options).
        map((res:Response)=>{
            let respuesta = res.json();
            if (respuesta._id) {
                this.usuario_id = respuesta._id;
            }
            return respuesta;
            
        }).catch(this.errorHandler);
   };

   ejecutar(){
       return this.http.get('http://localhost:8080/api/programa/'+this.usuario_id).
       map((res:Response)=>{console.log(res.json())}).catch(this.errorHandler);
   }

   constructor(private http:Http) {};

   private errorHandler(err: Response) { 
       return Observable.throw(err.json());}
} 



