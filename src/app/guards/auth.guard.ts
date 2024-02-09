import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true;

  console.log('paso por CAACT');
  return true;

};
