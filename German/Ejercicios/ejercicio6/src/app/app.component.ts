import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <h1>Mis Libros</h1>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio6';
}
