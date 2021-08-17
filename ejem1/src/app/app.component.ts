import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //El index.html se conecta con este archivo mediante la etiqueta <app-root></app-root> que esta en el body.
  templateUrl: './app.component.html' //esta es la visa del componente raiz
  //templateUrl: `<h1>My First Angular App</h1>` // en vez de apuntar al archivo app.component.html podria poner el html escrito entre `` aca mismo si quisiera.

})
export class AppComponent { //esta es la logica del componente raiz
}