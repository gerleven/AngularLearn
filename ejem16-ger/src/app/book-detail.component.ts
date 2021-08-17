import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book, BookService } from './book.service';

@Component({
  template: `
  <h2>{{book.title}}</h2>
  <div>
    <label>Id: </label>{{book.id}}
  </div>
  <div>
    <label>Description: </label>{{book.description}}
  </div>
  <p>
    <button (click)="gotoBooks()">Back</button>
  </p>`
})
export class BookDetailComponent {

  book: Book;

  constructor(private router: Router, activatedRoute: ActivatedRoute ,service: BookService) {
    console.log("rescatando parametro: ",activatedRoute.snapshot.params['id']);
    let id = activatedRoute.snapshot.params['id']; //Con esto rescatamos el parametro id que seria el numero que habia en la rul despues de book/ y que se guardo en "id" gracias al {path: 'book/:id'...} del app.routing.ts
    this.book = service.getBook(id); //ahora que sabemos el id del libro obtenido de la url lo usamos para pedir el libro al book.service
  }

  gotoBooks() {
    this.router.navigate(['/books']); //Con esto podemos navegar programaticamente al componente que asociamos al '/books' en el app.routing.ts
  }
}
