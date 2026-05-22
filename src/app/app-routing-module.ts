import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Main } from './main/main';
import { AdminProductos } from './admin-productos/admin-productos';
import { Usuarios } from './usuarios/usuarios';

const routes: Routes = [
  { path: '', redirectTo: '/tienda', pathMatch: 'full' },
  { path: 'tienda', component: Main },
  { path: 'admin', component: AdminProductos },
  { path: 'usuarios', component: Usuarios },
  { path: '**', redirectTo: '/tienda' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
