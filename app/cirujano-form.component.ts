import { Component } from '@angular/core';
import { Cirujano }    from './cirujano';
import { ApiService } from './services/api.services';

@Component({
  moduleId: module.id,
  selector: 'cirujano-form',
  templateUrl: 'cirujano-form.component.html',
  styles:[`
  .miBoton{
    width:100%;
  }`]
})

export class CirujanoFormComponent {

 model = new Cirujano('', '', '', '', '', '', '', '' , '' , '', '', '', '', '', '');

 preguntas = ['0-10 veces', '11-50 veces','51-100 veces', 'Más de 100 veces'];

 opciones = ['Si','No'];

 manos = ['Izquierda','Derecha','Ambidiestro'];

 sexo = ['Masculino','Femenino'];

newCirujano() {
  //this.model = new Cirujano('', '', '', '', '', '', '', '' , '' , '', '', '', '', '', '');
  console.log(this.model);

  let cirujano = new Cirujano(this.model.nombre, this.model.apellidoPaterno
  ,this.model.apellidoMaterno, this.model.iniciales, this.model.usuario, this.model.contrasena, this.model.edad, this.model.sexo,
  this.model.especialidad, this.model.anioRes, this.model.manoDominante, this.model.pregunta1, this.model.pregunta2, this.model.pregunta3, this.model.pregunta4
  );

  this.api.addCirujano(cirujano).subscribe(
    res => console.log(res)
  );
}


submitted = false;

onSubmit() {

   this.newCirujano();
   this.submitted = true; }

constructor(private api:ApiService) {}

};
