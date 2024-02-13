import { Expression } from '@angular/compiler';

export interface personas {
  Id: number;
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
}

export interface ApiResponse {
  StatusCode: number;
  success: boolean;
  fecha: string;
  message: string;
  response: {
    data: personas[];
  };
}

export interface personasInsert {
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
}

export interface personasUpdate {
  Id: number;
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
}

export interface personasDelete {
  Id: number;
}

export interface personasMostrar{
    Id: number;
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
}
