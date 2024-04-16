import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestorAreaService } from 'src/app/services/gestor-area.service';

@Component({
  selector: 'app-detalle-area',
  templateUrl: './detalle-area.component.html',
  styleUrls: ['./detalle-area.component.css']
})
export class DetalleAreaComponent {
  constructor(private servicio:GestorAreaService, private ruta:ActivatedRoute, private route:Router){}

  id:string="";
  nombre:string="";
  descripcion:string="";

  area:any
  ngOnInit(){
    this.ruta.params.subscribe(parametro=>{
      this.servicio.getArea(parametro["idarea"]).subscribe(p=>{
        this.id=p.id
        this.nombre=p.nombre
        this.descripcion=p.descripcion

      })
    })
  }

  actualizarArea(area:any){
    this.servicio.putArea(area.value).subscribe()
    this.route.navigate(['gestion']);
  }


}
