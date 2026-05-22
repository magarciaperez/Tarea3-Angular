import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-productos',
  standalone: false,
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.scss'
})
export class ListadoProductos {

  @Input()
  productos: any[] = [];

  @Output()
  addToCart = new EventEmitter<any>();

  onAddToCart(producto: any): void {
    this.addToCart.emit(producto);
  }

}