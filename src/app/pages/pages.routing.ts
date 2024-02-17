import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { authGuard } from '../guards/auth.guard';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaComponent } from './grafica/grafica.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PomesasComponent } from './pomesas/pomesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';
import { MedicosComponent } from './mantenimientos/medicos/medicos.component';



const routes: Routes = [
    {path: 'dashboard', 
    component: PagesComponent,
    canActivate:[authGuard],

    children:
    [
      {path: '', component: DashboardComponent, data: {titulo: 'Dashboard'}},
      {path: 'acount-settings', component: AccountSettingsComponent, data: {titulo: 'acount-settings'}},
      {path: 'grafica1', component: GraficaComponent, data: {titulo: 'Grafica'}},
      {path: 'rxjs', component: RxjsComponent, data: {titulo: 'Rxjs'}},
      {path: 'progress', component: ProgressComponent, data: {titulo: 'Progreso'}},
      {path: 'promesas', component: PomesasComponent, data: {titulo: 'Promesas'}},
      {path: 'perfil', component: PerfilComponent, data: {titulo: 'Perfil de usuario'}},
      
      
      //Mantenimientos
      {path: 'usuarios', component: UsuariosComponent, data: {titulo: 'Usuario de la aplicación'}},
      {path: 'hospitales', component: HospitalesComponent, data: {titulo: 'Hospitales de la aplicación'}},
      {path: 'medicos', component: MedicosComponent   , data: {titulo: 'Médicos de la aplicación'}},


    ]
  
  
    },
  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
