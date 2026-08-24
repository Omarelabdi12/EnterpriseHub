import { Routes } from '@angular/router';

import { Shell } from './layout/shell/shell';
import { Dashboard } from './features/dashboard/dashboard';
import { Login } from './features/auth/login/login';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [

  {
    path: 'login',
    component: Login
  },

  {
    path: '',
    component: Shell,
    children: [

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },

      {
        path: 'dashboard',
        canActivate: [authGuard],
        component: Dashboard
      }

    ]
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];