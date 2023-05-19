import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Relleno1Component } from './relleno1.component';
import { Relleno2Component } from './relleno2.component'; 
import { RellenosComponent } from './rellenos.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [AppComponent,    Relleno1Component,    Relleno2Component, RellenosComponent  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, routing],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
