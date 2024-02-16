import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../models/usuario.model';
import { CargarUsuario } from '../../../interfaces/cargar-usuarios.interface';
import { BusquedasService } from '../../../services/busquedas.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: ``
})
export class UsuariosComponent implements OnInit{

  public totalUsuarios:number = 0;
  public usuarios:Usuario[] = [];
  public usuariosTemp:Usuario[] =  [];
  public desde: number = 0;
  public cargando: boolean = true;

  constructor( private usuarioService: UsuarioService,
              private busquedaService: BusquedasService){

  }
  ngOnInit(): void {
    this.CargarUsuarios();
  }

    CargarUsuarios(){
      this.cargando = true;
      this.usuarioService.cargarUsuarios(this.desde)
      .subscribe(({total, usuarios})=>{
        this.totalUsuarios = total;

          
          this.usuarios = usuarios;
          this.usuariosTemp = usuarios;
          this.cargando = false;
      })
    }

    cambiarPagina(valor:number){
      this.desde += valor;

      if (this.desde < 0) {
        this.desde = 0;
      } else if (this.desde >= this.totalUsuarios) {
        this.desde -= valor;
      } 
      this.CargarUsuarios();
    }

    buscar(termino:string): Usuario[]{
      if (termino.length === 0) {
        return this.usuarios = this.usuariosTemp;
      }
      
      this.busquedaService.buscar('usuarios',termino)
        .subscribe(resultados => {
          this.usuarios = resultados;
        })
        return [];
    }
}
