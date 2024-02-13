import { Component, Inject, OnInit} from '@angular/core';
import { PersonasService } from '../data.service';
import {MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { personasUpdate } from '../modelos/personasModel';
import { personasMostrar } from '../modelos/personasModel';

@Component({
  selector: 'app-view-contacto',
  templateUrl: './view-contacto.component.html',
  styleUrls: ['./view-contacto.component.css']
})
export class ViewContactoComponent {
  personas: personasUpdate;
  constructor(
    public dialogRef: MatDialogRef<ViewContactoComponent>,
    private personasService: PersonasService,
    @Inject(MAT_DIALOG_DATA) public data: personasMostrar
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.personas = { ...data };
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    this.personasService.mostrarPersona(this.personas).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
        location.reload();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
