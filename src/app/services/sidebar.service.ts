import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu : any[] = [
    {   
        titulo : "Principal",
        icono: "fa-solid fa-gauge",
          submenu:[
            {titulo: "main", url: "/"},
            {titulo: "gráfica", url: "grafica1"},
            {titulo: "ProgressBar", url: "progress"},
            {titulo: "Account-Settings", url: "acount-settings"},
            {titulo: "Promesas", url: "promesas"},
            {titulo: "Rxjs", url: "rxjs"},

          ]
  
    }
  ]

  constructor() { }
}
