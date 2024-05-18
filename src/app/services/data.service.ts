import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map } from 'rxjs';
import { Componente } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getUsuarios(): Observable<any[]> {
    return this.http.get<any>('https://reqres.in/api/users').pipe(
      map(response => response.data) // Extrae la matriz de usuarios de la respuesta
    );
  }
  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }

  getAlbumes() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }
  getHeroes() {
    return this.http.get<Componente[]>('/assets/data/superheroes.json')
              .pipe(
                delay( 1500 )
              );
  }
}
