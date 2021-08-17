/*Por lo que entiendo hasta ahora:
Este archivo sirve para importar el modulo NgModule
al cual le agregamos como etiqueta el objeto con {declarations, imports y bootstrap}
y luego creamos y exportamos la clase AppModule*/
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], //componentes declarados
  imports: [BrowserModule, FormsModule], //modulos importados
  bootstrap: [AppComponent] //componente principal
})

export class AppModule { }
