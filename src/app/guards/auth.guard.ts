import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
  const allowedRoles: string[] = route.data['roles'] || []

  if(token && (!allowedRoles.length || allowedRoles.includes(user.role))){
    return true;
  }else{
    router.navigate(['']);
    return false;
  }
};
