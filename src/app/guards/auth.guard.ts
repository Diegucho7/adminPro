import { CanActivateFn, Router } from '@angular/router';
import {  inject } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { tap } from 'rxjs';




// export const AuthGuard: CanActivateFn = (route, state) => {
//   const userService = inject(UsuarioService);
//   const router = inject(Router);




//   //   return userService.validarToken().pipe(
//   //     tap((isAuthenticated) => {
//   //       if (!isAuthenticated) {
//   //         router.navigateByUrl('/login');
//   //       }
//   //   })
//   // );
// };