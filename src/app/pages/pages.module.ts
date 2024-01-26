import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaComponent } from './grafica/grafica.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from "../shared/shared.module";


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
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        RouterOutlet,
    ]
})
export class PagesModule { }
