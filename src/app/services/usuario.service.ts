import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment  } from '../../environments/environment';
import { Usuario } from '../models/usuario.model';
import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';

declare const google:any;

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuario!: Usuario;
  
  handleCredentialResponse: any;
  constructor(private http: HttpClient,
    private router: Router,
    private ngZone: NgZone,) {
      
    }

  

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${ base_url }/login/renew`, {
      headers: {
        'x-token': token
      }
    })
    .pipe(
      map((resp:any)=>{
        
        console.log(resp); 
        const {
          nombre,apellido,email,img,google,role,uid
        } = resp.usuario;
        
        this.usuario = new Usuario(nombre,apellido,email,'',img,google,role,uid);
        localStorage.setItem('token',resp.token);
        return true;
      }),
      catchError(error => of(false))
    );

  }

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
                        localStorage.setItem('email',resp.email);
                      }
                      )
                    )
  }

   loginGoogle(token:string){

    
      return this.http.post(`${base_url}/login/google`,{token})
      .pipe(
        tap((resp:any) =>{
          // console.log(resp);
          localStorage.setItem('token',resp.token);
          localStorage.setItem('email',resp.email);
        }
        )
      )
  
    }


    logout(){
      const email=localStorage.getItem('email')|| '';
      google.accounts.id.revoke(email,()=> {
        this.ngZone.run(()=>{
          this.router.navigateByUrl('/login');
        })
        localStorage.removeItem('token');
        localStorage.removeItem('email');
      })
    }
   }
  
