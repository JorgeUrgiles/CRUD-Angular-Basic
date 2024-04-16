import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestorAreasComponent } from './pages/gestor-areas/gestor-areas.component';
import { DetalleAreaComponent } from './pages/detalle-area/detalle-area.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaAreasComponent } from './components/tabla-areas/tabla-areas.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './pages/login/login.component';
import{ HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GestorAreasComponent,
    DetalleAreaComponent,
    FormularioComponent,
    TablaAreasComponent,
    NavBarComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
