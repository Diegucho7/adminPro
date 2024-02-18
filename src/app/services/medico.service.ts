import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Medico } from '../models/medico.model';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http:HttpClient,
              private router:Router
              ) { }


              get token():string{
                return localStorage.getItem('token') || '';  }
            
              get headers(){
                          return {
                            headers: {
                            'x-token': this.token
                                      }
                                };
                            }

              

  cargarMedicos( ): Observable<Medico[]> {
 
    const url = `${ base_url }/medicos`;
    return this.http.get<{ ok: boolean, medicos: Medico[] }>(url,
        {
          headers: {
            'x-token': this.token
          }
        })
          .pipe(
            map( (resp: { ok: boolean, medicos: Medico[] } ) => resp.medicos )
          );
          
 
  }

  crearMedico(medico:Medico ) {
 
    const url = `${ base_url }/medicos`;
    return this.http.post<{ ok: boolean, medicos: Medico[] }>(url,medico,this.headers);
         
 
  }
  actualizarMedico(medico:Medico ) {
 
    const url = `${ base_url }/medicos/${medico._id}`;
    return this.http.put<{ ok: boolean, medicos: Medico[] }>(url,medico,this.headers);
         
 
  }
  borrarMedico(_id:string) {
 
    const url = `${ base_url }/medicos/${_id}`;
    return this.http.delete(url,this.headers);
         
 
  }
}
