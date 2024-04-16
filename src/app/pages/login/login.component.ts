import { Component } from '@angular/core';
import { GestorAreaService } from 'src/app/services/gestor-area.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private servicio:GestorAreaService){
  
  }
id:any;
password:any

usuarios:any

ngOnInit(){
  this.servicio.getUsers().subscribe(p=>{
    this.usuarios=p
  })
  localStorage.setItem("acceso","F")
}

logUser(datos:any){
  for(let i=0; i<this.usuarios.length;i++){
    let usuarioLog = JSON.stringify(datos.value)
    let usuarioBD=JSON.stringify(this.usuarios[i])

    if(usuarioLog==usuarioBD){
      console.log("Usuario encontrado");
      localStorage.setItem("acceso","A")
      
    }else{
      console.log("Usuario no encontrado");
      
    }
  }
}

}
