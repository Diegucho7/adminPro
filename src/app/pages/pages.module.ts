import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';
import { SharedModule } from "../shared/shared.module";

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaComponent } from './grafica/grafica.component';
import { PagesComponent } from './pages.component';
import { NgChartsModule } from 'ng2-charts';
import { DonaComponent } from '../components/dona/dona.component';


@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        GraficaComponent,
        PagesComponent,
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        GraficaComponent,
        PagesComponent,
        DonaComponent
    ],
    imports: [
        CommonModule,
        RouterOutlet,
        
        NgChartsModule, //Modulos de Graficos
        
        FormsModule,
        SharedModule,
        ComponentsModule
    ]
})
export class PagesModule { }
