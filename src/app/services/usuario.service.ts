import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interfaces';
import { environment  } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
const base_Url= environment.base_url;
export class UsuarioService {
  
  constructor(private http: HttpClient  ) { }

  crearUsuario(formData: RegisterForm){

    // return this.http.post(`${ base_Url }  `); 

  }
}
