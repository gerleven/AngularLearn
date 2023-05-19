import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';//<-- importamos el "HeaderComponent"

@NgModule({
  declarations: [AppComponent,HeaderComponent],//<-- Agregamos el "HeaderComponent" a declarations
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }