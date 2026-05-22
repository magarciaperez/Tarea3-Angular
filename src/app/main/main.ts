import { Component } from '@angular/core';
import { Tienda } from '../services/tienda';
@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  productos: any[] = [];
  carrito: any[] = [];
  constructor(private tiendaService: Tienda) {

    this.productos = this.tiendaService.getProductos();
    this.carrito = this.tiendaService.getCarrito();
  }
  addToCart(producto: any): void {

    this.tiendaService.addToCart(producto);
  }
  removeFromCart(producto: any): void {
    this.tiendaService.removeFromCart(producto);
  }
}