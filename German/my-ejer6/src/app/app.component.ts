import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet><br>
    😍<mat-slider min="1" max="100" step="1" value="loving" [(ngModel)]="loving"></mat-slider>
    <input type="text" [(ngModel)]="loving">

    <!--
<h1>Ejercicio 6</h1>
<h2>Implementa una aplicación CRUD de gestión de libros</h2>
<div>
<br>Funcionalidades (varias pantallas)
<br>● Listado de todos los libros (títulos)
<br>● Formulario de nuevo libro
<br>● Vista de detalle de un libro
<br>● Modificación de libro
<br>● Borrado de un libro
<br>●Se proporciona una API REST (similar a la de los items pero para books).
<br>● Cada libro tiene las propiedades: id, title, description
</div>
<br>
-->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-ejer6';
  loving: number=1;
}
