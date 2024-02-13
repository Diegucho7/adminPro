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
      {path: 'perfil', component: PerfilComponent, data: {titulo: 'Perfil'}},
    ]
  
  
    },
  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
