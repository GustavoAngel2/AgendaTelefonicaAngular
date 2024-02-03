import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-insert-contacto',
  templateUrl: './insert-contacto.component.html',
  styleUrls: ['./insert-contacto.component.css'],
  standalone: true,
  imports:[
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class InsertContactoComponent {

}
