/*Por lo que entiendo hasta ahora, este archivo sirve para:
importar el modulo Component desde agular/core
a ese componente le agregamos el selector (el mismo que esta en el body del index.html) y el template que es donde vamos a escribir la vista o html de la app
por ultimo creamos y exportamos la clase AppComponent que es onde vamos a escribir la logica*/
import { DatePipe } from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root', //El index.html se conecta con este archivo mediante la etiqueta <app-root></app-root> que esta en el body.
  templateUrl: './app.component.html' //esta es la visa del componente raiz
  //templateUrl: `<h1>My First Angular App</h1>` // en vez de apuntar al archivo app.component.html podria poner el html escrito entre `` aca mismo si quisiera.
})
//esta es la logica del componente raiz:
export class AppComponent {
  name = 'Anybody';
  imgUrl = "assets/img.png"; //con comillas simples es lo mismo

  setName(name:string){
    this.name = name;
  }

  //Templates
  mostrar:boolean=true;
  mostrarTexto='no mostrar';
  permutarMostrar(){
    this.mostrar=!this.mostrar;
    if(this.mostrar){
      this.mostrarTexto='no mostrar';
    }
    else{
      this.mostrarTexto='mostrar';
    }

  }
  nombres = ['german','pepe','enrique'];
  personas = [
    {nombre:'German',edad:32},
    {nombre:'Pepe',edad:33},
    {nombre:'Enrique',edad:16, tutor:'padre'}
  ];
  persona={
    nombre: 'jesus',
    edad: 2021
  }
  german={
    nombre: "german",
    edad: 33
  }
  dios=undefined;

  fechaHoy = new Date(2021,6,14);
  miCumple = new Date(2021,8,2);
  fechaAhora = Date.now;
}