/*Por lo que entiendo hasta ahora, este archivo sirve para:
importar el modulo Component desde agular/core
a ese componente le agregamos el selector (el mismo que esta en el body del index.html) y el template que es donde vamos a escribir la vista o html de la app
por ultimo creamos y exportamos la clase AppComponent que es onde vamos a escribir la logica*/
import {Component} from '@angular/core';
import { prependListener } from 'node:process';
import {Persona} from "./Persona";

@Component({
  selector: 'app-root', //El index.html se conecta con este archivo mediante la etiqueta <app-root></app-root> que esta en el body.
  templateUrl: './app.component.html' //esta es la visa del componente raiz
  //templateUrl: `<h1>My First Angular App</h1>` // en vez de apuntar al archivo app.component.html podria poner el html escrito entre `` aca mismo si quisiera.
})
//esta es la logica del componente raiz:
export class AppComponent {
  miChecked=false;

  permutar(){
    this.miChecked=!this.miChecked;
  }

  listaCompra=[
    {name: "tomate", comprar: false},
    {name: "huevos", comprar: true},
    {name: "leche", comprar: false},
    {name: "pan", comprar: true},
  ];






}
