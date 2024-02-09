import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';
import { environment  } from '../../environments/environment';
import { tap } from 'rxjs';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  
  constructor(private http: HttpClient  ) { }

  crearUsuario(formData: RegisterForm){

    // console.log('creando usuarios')
    

    return this.http.post(`${ base_url }/usuarios`,formData )
                                                          .pipe(
                                                            tap((resp:any) =>{
                                                              localStorage.setItem('token',resp.token)
                                                            }

                                                            )
                                                          )
  }
  login(formData: LoginForm){
    
    // console.log('creando usuarios')

    return this.http.post(`${ base_url }/login`,formData )
                    .pipe(
                      tap((resp:any) =>{
                        console.log(resp);
                        localStorage.setItem('token',resp.token);
                      }
                      )
                    )
  }

  loginGoogle(token:string){
    return this.http.post(`${base_url}/login/google`,{token})
    .pipe(
      tap((resp:any) =>{
        console.log(resp);
        localStorage.setItem('token',resp.token);
      }
      )
    )
  }
}
