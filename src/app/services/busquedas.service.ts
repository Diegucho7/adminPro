import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, pipe } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Hospital } from '../models/hospital.model';
import { Medico } from '../models/medico.model';


const base_url = environment.base_url; 

@Injectable({
  providedIn: 'root'
})
export class BusquedasService {

  constructor(private http: HttpClient ) { }

      get token():string{
        return localStorage.getItem('token') || '';  }
            
        get headers(){
          return {
            headers: {
            'x-token': this.token
                      }
                }
            }

      private transformarUsuarios(resultados: any[]): Usuario[]{

          return resultados.map(
            user => new Usuario(user.nombre, user.apellido, user.email,'',user.img,user.google,user.role,user.uid)
            )
      }


      private transformarHospitales(resultados: any[]): Hospital[]{

          return resultados
          .map(
            hospital => new Hospital(hospital.nombre,hospital._id,hospital.img)
            );
      }
      private transformarMedicos(resultados: any[]): Medico[]{

          return resultados
          .map(
            medico => new Medico(medico.nombre,medico.apellido,medico._id,medico.img)
            );
      }

      busquedaGlobal(termino:string){
        const url = `${base_url}/todo/${termino}`;
        return this.http.get<any[]>(url, this.headers)
      }

      buscar(
              tipo: 'usuarios'|'medicos'|'hospitales',
              termino: string = ''
      ){
        const url = `${base_url}/todo/coleccion/${tipo}/${termino}`;
      return this.http.get<any[]>(url, this.headers)
            .pipe(
              map((resp:any) => {
                switch (tipo) {
                  case 'usuarios':
                      return this.transformarUsuarios(resp.resultados); 

                      
                  case 'hospitales':
                    return this.transformarHospitales(resp.resultados);
                   
                  case 'medicos':
                    return this.transformarHospitales(resp.resultados);
                   

                  default:
                    return [];
                }
              })
            );


      }

}

