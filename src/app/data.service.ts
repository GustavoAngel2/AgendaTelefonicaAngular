import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  personas,
  ApiResponse,
  personasUpdate,
  personasDelete,
  personasMostrar,
} from './modelos/personasModel';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  private apiUrl = 'http://localhost:5020/api';
  constructor(private http: HttpClient) {}

  getPersona(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/Contactos/Get`);
  }

  insertPersona(PersonasData: {
    Nombre: string;
    ApPaterno: string;
    ApMaterno: string;
    Alias: string;
    Direccion: string;
    NumMovil: string;
    NumCasa: string;
    Correo: string;
    NumEmergencia: string;
    Empresa: string;
    Departamento: string;
    Puesto: string;
  }): Observable<ApiResponse> {
    const body = {
      Nombre: PersonasData.Nombre,
      ApPaterno: PersonasData.ApPaterno,
      ApMaterno: PersonasData.ApMaterno,
      Alias: PersonasData.Alias,
      Direccion: PersonasData.Direccion,
      NumMovil: PersonasData.NumMovil,
      NumCasa: PersonasData.NumCasa,
      Correo: PersonasData.Correo,
      NumEmergencia: PersonasData.NumEmergencia,
      Empresa: PersonasData.Empresa,
      Departamento: PersonasData.Departamento,
      Puesto: PersonasData.Puesto,
    };
    return this.http.post<ApiResponse>(`${this.apiUrl}/Contactos/Insert`, body);
  }
  deletePersona(Id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/Contactos/Delete`, { Id });
  }
  updatePersona(PersonasData: personasUpdate): Observable<ApiResponse> {
    const body = {
      Id: PersonasData.Id,
      Nombre: PersonasData.Nombre,
      ApPaterno: PersonasData.ApPaterno,
      ApMaterno: PersonasData.ApMaterno,
      Alias: PersonasData.Alias,
      Direccion: PersonasData.Direccion,
      NumMovil: PersonasData.NumMovil,
      NumCasa: PersonasData.NumCasa,
      Correo: PersonasData.Correo,
      NumEmergencia: PersonasData.NumEmergencia,
      Empresa: PersonasData.Empresa,
      Departamento: PersonasData.Departamento,
      Puesto: PersonasData.Puesto,
    };
    console.log('Enviando solicitud con el siguiente cuerpo: ', body);
    return this.http.put<ApiResponse>(`${this.apiUrl}/Contactos/Update`, body);
  }
    mostrarPersona(PersonasData: personasMostrar): Observable<ApiResponse> {
    const body = {
      Id: PersonasData.Id,
      Nombre: PersonasData.Nombre,
      ApPaterno: PersonasData.ApPaterno,
      ApMaterno: PersonasData.ApMaterno,
      Alias: PersonasData.Alias,
      Direccion: PersonasData.Direccion,
      NumMovil: PersonasData.NumMovil,
      NumCasa: PersonasData.NumCasa,
      Correo: PersonasData.Correo,
      NumEmergencia: PersonasData.NumEmergencia,
      Empresa: PersonasData.Empresa,
      Departamento: PersonasData.Departamento,
      Puesto: PersonasData.Puesto,
    };
    console.log('Enviando solicitud con el siguiente cuerpo: ', body);
    return this.http.put<ApiResponse>(`${this.apiUrl}/Contactos/Update`, body);
  }
}
