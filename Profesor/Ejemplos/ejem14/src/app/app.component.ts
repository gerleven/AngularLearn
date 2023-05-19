import { Component } from '@angular/core';
import { BooksService } from './books.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  $titles: Observable<string[]>; //(2)*

  constructor(private service: BooksService) { }

  search(title: string) {
    this.$titles = this.service.getTitles(title);
  }
  /*
  Antes, teniamos un array de titles en (1)*, luego el metodo getTitles de (2)* nos traia el Obervable<string[]> al cual nos subscribiamos y al recibir 
  la respuesta de esa subscripcion en (3)* haciamos la asignacion entre nuestro array titles de (1)* y el array de titulos interno del Observable y por 
  ultimo le dabamos ese array de titles de (1)* al template en el html.

Ahora el Async Pipe permite 2 cosas: que le podamos dar directamente el objeto Observable al template html (en vez del pasarle un simple array previamente 
  rellenado con el contenido del array interno del Observable) y que desde el template ya podamos directamente subscribimos a ese observable (para que cuando 
    haya cambios en el Observable se entere y actualice el array interno).
El observable en el template sera $miObservable (que tiene que estar definido en el .ts) y nos subscribimos a el con el “| async”. 
quedando entonces asi: ($miObservable | async).


  */

/* //Antes de usar Async Pipe:
export class AppComponent {

  titles: string[] = [];    //(1)*

  constructor(private service: BooksService) { }

  search(title: string) {

    this.titles = [];

    this.service.getTitles(title).subscribe(      //(2)*
      titles => this.titles = titles,           //(3)*
      error => console.error(error)
    );
  }
*/
}
