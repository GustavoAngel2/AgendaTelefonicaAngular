import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../data.service';
import { personas } from '../modelos/personasModel';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { InsertContactoComponent } from '../insert-contacto/insert-contacto.component';
import { UpdateContactoComponent } from '../update-contacto/update-contacto.component';
import { ViewContactoComponent } from '../view-contacto/view-contacto.component';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  displayedColumns: string[] = [
    //  'Id',
    'Nombre',
    // 'ApPaterno',
    // 'ApMaterno',
    // 'Alias',
    // 'Direccion',
    // 'NumMovil',
    // 'NumCasa',
    // 'Correo',
    // 'NumEmergencia',
    // 'Empresa',
    // 'Departamento',
    // 'Puesto',
    'Acciones',
  ];
  dataSource: MatTableDataSource<personas>;

  constructor(
    private personaService: PersonasService,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<personas>(); // Inicializa dataSource como una instancia de MatTableDataSource
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data: personas, filter: string) => {
      return (
        data.Nombre.toLowerCase().includes(filter) ||
        data.Id.toString().includes(filter)
      ); // Puedes añadir más campos si es necesario
    };
    this.personaService.getPersona().subscribe({
      next: (response) => {
        console.log('Respuesta del servidor:', response);
        if (response && Array.isArray(response) && response.length > 0) {
          this.dataSource.data = response; // Asigna los datos al atributo 'data' de dataSource
        } else {
          console.log('no contiene datos');
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  // Método para realizar el filtrado
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  abrirInsertarModal() {
    const dialogRef = this.dialog.open(InsertContactoComponent, {
      width: '550px',
      // Puedes pasar datos al componente de la modal si es necesario
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Manejar los resultados cuando la modal se cierre
    });
  }
  eliminarContacto(Id: number) {
    // Aquí puedes agregar una confirmación antes de eliminar si lo deseas
    if (
      confirm('¿Estás seguro de que deseas eliminar esta categoria de modulo?')
    ) {
      this.personaService.deletePersona(Id).subscribe({
        next: (response) => {
          console.log(response);
          this.dataSource.data = this.dataSource.data.filter(
            (catmodulo: personas) => catmodulo.Id !== Id
          );
        },
        error: (error) => {
          // Manejar el error aquí
          console.error(
            'Hubo un error al eliminar la categoria del modulo',
            error
          );
        },
      });
    }
  }
  abrirEditarModal(catmodulo: personas) {
    const dialogRef = this.dialog.open(UpdateContactoComponent, {
      width: '550px',
      data: catmodulo, // Pasa el objeto de departamento a la modal
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }

  verContacto(catmodulo: personas) {
    const dialogRef = this.dialog.open(ViewContactoComponent, {
      width: '550px',
      data: catmodulo, // Pasa el objeto de departamento a la modal
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
}
