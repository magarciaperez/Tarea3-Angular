// =====================================================
// app-routing-module.ts
// Configuración del router principal de la aplicación.
// Define las rutas de las distintas secciones.
// =====================================================

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes de las distintas secciones
import { Main } from './main/main';
import { AdminProductos } from './admin-productos/admin-productos';
import { Usuarios } from './usuarios/usuarios';

// Tabla de rutas principal
const routes: Routes = [
  // Ruta por defecto → redirige a /tienda
  { path: '', redirectTo: '/tienda', pathMatch: 'full' },

  // Zona de tienda (listado de productos + carrito)
  { path: 'tienda', component: Main },

  // Zona de administración (formulario reactivo de productos)
  { path: 'admin', component: AdminProductos },

  // Zona de usuarios (consume API REST – Tarea 3)
  { path: 'users', component: Usuarios },

  // Cualquier ruta no reconocida → redirige a /tienda
  { path: '**', redirectTo: '/tienda' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
