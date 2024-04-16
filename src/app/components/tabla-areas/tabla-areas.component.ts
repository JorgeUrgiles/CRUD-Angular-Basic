import { Component } from '@angular/core';
import { GestorAreaService } from 'src/app/services/gestor-area.service';

@Component({
  selector: 'app-tabla-areas',
  templateUrl: './tabla-areas.component.html',
  styleUrls: ['./tabla-areas.component.css']
})
export class TablaAreasComponent {
  constructor(private servicio:GestorAreaService){

  }

  areas:any
  ngOnInit(){
    this.servicio.getAreas().subscribe(p=>{
      this.areas=p
    })
  }

  eliminarAreas(id:any){
    this.servicio.deleteArea(id).subscribe()
  }
}
