import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { DonaComponent } from './dona/dona.component';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';



@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent
  ],
  exports:[
    IncrementadorComponent,
    DonaComponent
  ],
  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: false }}
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ]
})
export class ComponentsModule { }
