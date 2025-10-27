import { Routes } from '@angular/router';
import { Login } from './login/login';
import { MenuHorizontal } from './menu-horizontal/menu-horizontal';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
  { path: 'login', component: Login },
  { path: 'menu-horizontal', component: MenuHorizontal }
];