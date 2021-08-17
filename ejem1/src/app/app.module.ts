import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], //componentes declarados
  imports: [BrowserModule, FormsModule], //modulos importados
  bootstrap: [AppComponent] //componente principal
})
export class AppModule { }
