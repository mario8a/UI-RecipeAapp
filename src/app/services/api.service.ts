import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  obtenerPersonaje() {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }

  obtenerUnPersonaje(id) {
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`)
  }
}
