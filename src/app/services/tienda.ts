import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Tienda {

  productos = [
    { id: 1, nombre: 'Teclado mecánico', precio: 59.9, stock: 1 },
    { id: 2, nombre: 'Ratón óptico', precio: 19.5, stock: 2 },
    { id: 3, nombre: 'Monitor 24"', precio: 139, stock: 0 },
    { id: 4, nombre: 'Auriculares inalámbricos', precio: 79.9, stock: 3 },
    { id: 5, nombre: 'Webcam HD', precio: 49.9, stock: 5 }
  ];

  carrito: any[] = [];

  getProductos() {
    return this.productos;
  }

  getCarrito() {
    return this.carrito;
  }

  addProducto(nuevoProducto: any): void {
    const productoExistente = this.productos.find(
      producto => producto.nombre.toLowerCase() === nuevoProducto.nombre.toLowerCase()
    );

    if (productoExistente) {
      productoExistente.precio = nuevoProducto.precio;
      productoExistente.stock = nuevoProducto.stock;
    } else {
      const ultimoId =
        this.productos.length > 0
          ? this.productos[this.productos.length - 1].id
          : 0;

      const productoConId = {
        id: ultimoId + 1,
        ...nuevoProducto
      };

      this.productos.push(productoConId);
    }
  }

  deleteProducto(id: number): void {
    this.productos = this.productos.filter(producto => producto.id !== id);
    this.carrito = this.carrito.filter(producto => producto.id !== id);
  }

  addToCart(producto: any) {
    if (producto.stock > 0) {
      producto.stock--;

      const productoEnCarrito = this.carrito.find(item => item.id === producto.id);

      if (productoEnCarrito) {
        productoEnCarrito.unidades++;
      } else {
        this.carrito.push({
          ...producto,
          unidades: 1
        });
      }
    }
  }

  removeFromCart(producto: any) {
    const productoEnCatalogo = this.productos.find(item => item.id === producto.id);
    const productoEnCarrito = this.carrito.find(item => item.id === producto.id);

    if (productoEnCatalogo && productoEnCarrito) {
      productoEnCatalogo.stock++;

      if (productoEnCarrito.unidades > 1) {
        productoEnCarrito.unidades--;
      } else {
        this.carrito = this.carrito.filter(item => item.id !== producto.id);
      }
    }
  }
}