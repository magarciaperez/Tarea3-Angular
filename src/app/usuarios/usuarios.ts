// ============================================================
// usuarios.ts
// Componente encargado de mostrar la lista de usuarios
// obtenida desde una API REST externa.
//
// Gestiona el ciclo de vida del componente (RA03_d):
//   - ngOnInit:    carga automática al entrar en la sección.
//   - ngOnDestroy: cancela la suscripción al salir
//                  para evitar fugas de memoria.
// ============================================================

import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuariosServicio } from '../usuarios-servicio';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.scss'
})
export class Usuarios implements OnInit, OnDestroy {

  // Array donde se almacenan los usuarios recibidos desde la API.
  usuarios: any[] = [];

  // Mensaje de error que se mostrará al usuario en caso de fallo.
  errorMensaje: string = '';

  // Referencia a la suscripción activa al observable del servicio.
  // Se guarda para poder cancelarla en ngOnDestroy y evitar
  // que el observable quede vivo cuando el componente se destruye.
  private suscripcion?: Subscription;

  constructor(
    private usuariosServicio: UsuariosServicio,
    private cdr: ChangeDetectorRef
  ) {}

  // ngOnInit: se ejecuta automáticamente al inicializar el componente.
  // Carga la lista de usuarios sin necesidad de pulsar el botón.
  ngOnInit(): void {
    this.cargarUsuarios();
  }

  // ngOnDestroy: se ejecuta cuando el componente se destruye
  // (al navegar a otra sección del menú).
  // Cancela la suscripción activa para evitar fugas de memoria.
  ngOnDestroy(): void {
    this.suscripcion?.unsubscribe();
  }

  // cargarUsuarios: realiza la petición al servicio y se suscribe
  // al observable devuelto. Se llama tanto desde ngOnInit
  // como desde el botón "Cargar Usuarios" de la interfaz.
  cargarUsuarios(): void {
    // Cancela cualquier suscripción anterior antes de crear una nueva
    // para evitar acumulación de observables vivos.
    this.suscripcion?.unsubscribe();

    this.suscripcion = this.usuariosServicio.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
        this.errorMensaje = '';
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMensaje = err.message;
        this.usuarios = [];
        this.cdr.detectChanges();
      }
    });
  }
}
