import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MotosComponent } from './motos/motos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ContactosComponent } from './contactos/contactos.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MotosComponent,
    FormularioComponent,
    ContactosComponent,
    NavmenuComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
