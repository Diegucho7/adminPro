import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';
import { Hospital } from '../models/hospital.model';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(
        private http:HttpClient,
        private router:Router,

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

  // cargarHospitales(): Observable <Hospital[]>{
  //   // localhost:3000/api/usuarios?desde=0
    
  //   const url = `${base_url}/hospitales`;
    
  //   return this.http.get<{ok:boolean, hospitales: Hospital[] }>(url,{headers: this.headers})
  //                   .pipe(
  //                     map(( resp: {ok:boolean, hospitales: Hospital[] }) => resp.hospitales)
  //                   );
                    
  // }

  cargarHospitales( ): Observable<Hospital[]> {
 
    const url = `${ base_url }/hospitales`;
    return this.http.get<{ ok: boolean, hospitales: Hospital[] }>(url,
        {
          headers: {
            'x-token': this.token
          }
        })
          .pipe(
            map( (resp: { ok: boolean, hospitales: Hospital[] } ) => resp.hospitales )
          );
          
 
  }
  crearHospital(nombre:string ) {
 
    const url = `${ base_url }/hospitales`;
    return this.http.post<{ ok: boolean, hospitales: Hospital[] }>(url,{nombre},this.headers);
         
 
  }
  actualizarHospital(_id:string, nombre:string) {
 
    const url = `${ base_url }/hospitales/${_id}`;
    return this.http.put<{ ok: boolean, hospitales: Hospital[] }>(url,{nombre},this.headers);
         
 
  }
  borrarHospital(_id:string) {
 
    const url = `${ base_url }/hospitales/${_id}`;
    return this.http.delete<{ ok: boolean, hospitales: Hospital[] }>(url,this.headers);
         
 
  }
}


