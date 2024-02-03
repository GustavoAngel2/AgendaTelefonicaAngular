import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InsertContactoComponent } from './insert-contacto/insert-contacto.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path:"", component:InicioComponent},
  {path:"test", component:InsertContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
