import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { MotosComponent } from './motos/motos.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

//Rutas de navegacion
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'contactos', component: ContactosComponent},
  { path: 'formulario', component: FormularioComponent},
  { path: 'motos', component: MotosComponent},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
