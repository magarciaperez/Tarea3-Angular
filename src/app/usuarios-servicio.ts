import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServicio {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // Petición GET a la API. Si falla, se captura con catchError
  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Genera un Observable de error con un mensaje legible para el componente
  private handleError(error: any) {
    let mensaje = 'Error al obtener los usuarios';
    if (error.status === 0) {
      mensaje = 'No hay conexión con el servidor';
    }
    return throwError(() => new Error(mensaje));
  }
}
