import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';
import { SharedModule } from "../shared/shared.module";

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaComponent } from './grafica/grafica.component';
import { PagesComponent } from './pages.component';
import { NgChartsModule } from 'ng2-charts';
import { DonaComponent } from '../components/dona/dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PomesasComponent } from './pomesas/pomesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';


@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        GraficaComponent,
        PagesComponent,
        AccountSettingsComponent,
        PomesasComponent,
        RxjsComponent,
        PerfilComponent,
        UsuariosComponent,
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        GraficaComponent,
        PagesComponent,
        DonaComponent,
        AccountSettingsComponent
    ],
    imports: [
        CommonModule,
        RouterOutlet,
        NgChartsModule, //Modulos de Graficos
        ReactiveFormsModule,

        FormsModule,
        SharedModule,
        ComponentsModule,
        
    ]
})
export class PagesModule { }
