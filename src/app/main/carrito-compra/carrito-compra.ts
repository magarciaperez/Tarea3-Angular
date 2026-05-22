import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carrito-compra',
  standalone: false,
  templateUrl: './carrito-compra.html',
  styleUrl: './carrito-compra.scss'
})
export class CarritoCompra {

  @Input()
  carrito: any[] = [];

  @Output()
  removeFromCart = new EventEmitter<any>();

  onRemoveFromCart(producto: any): void {
    this.removeFromCart.emit(producto);
  }

  getTotal(): number {
    return this.carrito.reduce(
      (total, producto) => total + (producto.precio * producto.unidades),
      0
    );
  }
}