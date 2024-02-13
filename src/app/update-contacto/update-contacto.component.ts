import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PersonasService } from '../data.service';
import { personasUpdate } from '../modelos/personasModel';

@Component({
  selector: 'app-update-contacto',
  templateUrl: './update-contacto.component.html',
  styleUrls: ['./update-contacto.component.css'],
})
export class UpdateContactoComponent {
  personas: personasUpdate;
  constructor(
    public dialogRef: MatDialogRef<UpdateContactoComponent>,
    private personasService: PersonasService,
    @Inject(MAT_DIALOG_DATA) public data: personasUpdate
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.personas = { ...data };
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    this.personasService.updatePersona(this.personas).subscribe({
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
