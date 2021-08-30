import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Routing Test</h1><router-outlet></router-outlet><!--Agregamos directamente aca porque son solo 2 lineas, no tiene sentido un archivo aparte-->`,
  styles: ['h1{color:blue}']
})
export class AppComponent {
  title = 'gerRouting';
}
