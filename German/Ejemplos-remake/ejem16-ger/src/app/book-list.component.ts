import { Component } from '@angular/core';
import { Book, BookService } from './book.service';

@Component({
  template: `
    <h2>BOOKS</h2>
    <ul>
      <li *ngFor="let book of books">
        <a [routerLink]="['/book', book.id]">{{book.id}} - {{book.title}}</a>
      </li>
    </ul>
    <!--En vez de href, los links usan [routerLink].-->
    <a [routerLink]="'/book/12'">a book2</a><!--La URL se puede indicar como un string (completa)-->
    <a [routerLink]="['/book', libroSagrado]">a book1</a> <!--o como un array de strings si hay parámetros-->
  `
})
export class BookListComponent {

libroSagrado = 11;
  books: Book[];
  

  constructor(service: BookService) {
    this.books = service.getBooks();
  }
}