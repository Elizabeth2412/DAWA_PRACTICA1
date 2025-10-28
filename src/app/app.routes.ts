import { Routes } from '@angular/router';
import { Login } from './login/login';
import { MenuHorizontal } from './menu-horizontal/menu-horizontal';
import { PaginaInicial } from './pagina-inicial/pagina-inicial';
import { Principal } from './principal/principal';

export const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', component: PaginaInicial },
  //{ path: '**', redirectTo: '' },
  { path: 'login', component: Login },
  { path: 'menu-horizontal', component: MenuHorizontal },
  { path:'principal', component: Principal }
];