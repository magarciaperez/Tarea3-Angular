import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServicio {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    let mensaje = 'Error al obtener los usuarios';

    if (error.status === 0) {
      mensaje = 'No hay conexión con el servidor';
    }

    return throwError(() => new Error(mensaje));
  }
}
