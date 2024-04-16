import { Component } from '@angular/core';
import { GestorAreaService } from 'src/app/services/gestor-area.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
constructor(private servicio:GestorAreaService){

  
}
 id:any;
 nombre:any;
 descripcion:any

 area:any

 crearArea(area:any){
  this.servicio.postArea(area.value).subscribe()
  console.log(area.value);
  
 }





}
