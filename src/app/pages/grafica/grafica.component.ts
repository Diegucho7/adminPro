import { Component, Input } from '@angular/core';
import { ChartData, Color } from 'chart.js';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: ``
})
export class GraficaComponent {

  @Input('backgroundColor') backgroundColorDonut: string[] = [];

  constructor() {
    // Valores por defecto en caso no se setee nada desde otros componentes
    // this.dataDonut = [350, 450, 100];
    this.doughnutChartLabels = ['Labels1', 'Labels2', 'Labels3'];
    this.backgroundColorDonut = ['#6857E6', '#009FEE', '#F02059'];
  }

  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100] },
     
    ],
  };

  public colors : Color[] = [
    // { background: ['#9E120E','#FF5800', '#FFB414' ] }
  ];
        
 
}
