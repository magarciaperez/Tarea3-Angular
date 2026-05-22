import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tienda } from '../services/tienda';

@Component({
  selector: 'app-admin-productos',
  standalone: false,
  templateUrl: './admin-productos.html',
  styleUrl: './admin-productos.scss'
})
export class AdminProductos {

  productoForm: FormGroup;
  productos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private tiendaService: Tienda
  ) {
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      precio: [null, [Validators.required, Validators.min(0.01)]],
      stock: [null, [Validators.required, Validators.min(0)]]
    });

    this.productos = this.tiendaService.getProductos();
  }

  onSubmit(): void {
    if (this.productoForm.valid) {
      this.tiendaService.addProducto(this.productoForm.value);
      this.productos = this.tiendaService.getProductos();
      this.productoForm.reset();
    } else {
      this.productoForm.markAllAsTouched();
    }
  }

  eliminarProducto(id: number): void {
    this.tiendaService.deleteProducto(id);
    this.productos = this.tiendaService.getProductos();
  }

  get nombre() {
    return this.productoForm.get('nombre');
  }

  get precio() {
    return this.productoForm.get('precio');
  }

  get stock() {
    return this.productoForm.get('stock');
  }
}