import { NgModule, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

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
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [App]
})
export class AppModule { }
