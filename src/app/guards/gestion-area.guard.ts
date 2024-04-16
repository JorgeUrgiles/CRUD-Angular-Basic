import { CanActivateFn } from '@angular/router';

export const gestionAreaGuard: CanActivateFn = (route, state) => {
let temp= localStorage.getItem("acceso")

if(temp=="A"){
  return true
}else{
  return false;

}




  
};
