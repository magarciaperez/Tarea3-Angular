import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuariosServicio } from '../usuarios-servicio';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.scss'
})
export class Usuarios implements OnInit, OnDestroy {

  // Lista de usuarios devuelta por la API
  usuarios: any[] = [];

  // Mensaje de error que se muestra en la vista si la petición falla
  errorMensaje: string = '';

  // Identificador de la suscripción para poder cancelarla en ngOnDestroy
  private suscripcion?: Subscription;

  constructor(private usuariosServicio: UsuariosServicio) { }

  // Al iniciar el componente cargamos la lista de usuarios
  ngOnInit(): void {
    this.cargarUsuarios();
  }

  // Al destruir el componente cancelamos la suscripción para evitar fugas de memoria
  ngOnDestroy(): void {
    if (this.suscripcion) {
      this.suscripcion.unsubscribe();
    }
  }

  // Petición al servicio. Se suscribe al observable y guarda la suscripción.
  cargarUsuarios(): void {
    this.errorMensaje = '';

    this.suscripcion = this.usuariosServicio.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
      },
      error: (err) => {
        this.errorMensaje = err.message;
        this.usuarios = [];
      }
    });
  }
}
