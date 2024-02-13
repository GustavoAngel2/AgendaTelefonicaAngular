import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PersonasService } from '../data.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-insert-contacto',
  templateUrl: './insert-contacto.component.html',
  styleUrls: ['./insert-contacto.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
})
export class InsertContactoComponent {
  Nombre: string = '';
  ApPaterno: string = '';
  ApMaterno: string = '';
  Alias: string = '';
  Direccion: string = '';
  NumMovil: string = '';
  NumCasa: string = '';
  Correo: string = '';
  NumEmergencia: string = '';
  Empresa: string = '';
  Departamento: string = '';
  Puesto: string = '';
  constructor(
    public dialogRef: MatDialogRef<InsertContactoComponent>,
    private personaService: PersonasService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    const nuevoContacto = {
      Nombre: this.Nombre,
      ApPaterno: this.ApPaterno,
      ApMaterno: this.ApMaterno,
      Alias: this.Alias,
      Direccion: this.Direccion,
      NumMovil: this.NumMovil,
      NumCasa: this.NumCasa,
      Correo: this.Correo,
      NumEmergencia: this.NumEmergencia,
      Empresa: this.Empresa,
      Departamento: this.Departamento,
      Puesto: this.Puesto,
    };

    // Aquí asumo que tienes un método en tu servicio para insertar el departamento
    this.personaService.insertPersona(nuevoContacto).subscribe({
      next: (response) => {
        // Puedes cerrar la modal y/o actualizar la tabla aquí si es necesario
        this.dialogRef.close(response);
        location.reload();
      },
      error: (error) => {
        // Manejar el error aquí
        console.error('Hubo un error al insertar el almacen', error);
      },
    });
  }
}
