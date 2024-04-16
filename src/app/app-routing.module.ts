import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestorAreasComponent } from './pages/gestor-areas/gestor-areas.component';
import { LoginComponent } from './pages/login/login.component';
import { DetalleAreaComponent } from './pages/detalle-area/detalle-area.component';
import { gestionAreaGuard } from './guards/gestion-area.guard';

const routes: Routes = [
  {path:'gestion',component:GestorAreasComponent,canActivate:[gestionAreaGuard]},
{path:'login', component:LoginComponent},
{path:'detalles/:idarea', component:DetalleAreaComponent},






{path:'"', redirectTo:'login', pathMatch:'full'},
{path:"**", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
