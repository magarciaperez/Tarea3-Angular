import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';

import { App } from './app';
import { Menu } from './menu/menu';
import { Main } from './main/main';
import { ListadoProductos } from './main/listado-productos/listado-productos';
import { CarritoCompra } from './main/carrito-compra/carrito-compra';
import { AdminProductos } from './admin-productos/admin-productos';
import { Usuarios } from './usuarios/usuarios';

@NgModule({
  declarations: [
    App,
    Menu,
    Main,
    ListadoProductos,
    CarritoCompra,
    AdminProductos,
    Usuarios
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(withFetch())
],
  bootstrap: [App]
})
export class AppModule { }
