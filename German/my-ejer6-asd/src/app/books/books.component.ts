import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Book} from '../Book';
import { BookService } from '../book.service';
import {map,catchError} from "rxjs/operators";
import { Observable, throwError } from "rxjs";



@Component({
  selector: 'app-books',
  template: `
    <h1>Books List.</h1>

    <div *ngFor="let book of ($bookList | async)"><a [routerLink]="['/bookDetail/',book.id]">{{book.id}} - {{book.title}}</a></div>
    <br>
    <button (click)="newBook();">New Book</button>
    <button (click)="test();">Test</button>
`,
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  
  constructor(private router: Router, private bookService: BookService) {}

  $bookList: Observable<Book[]>;
  unLibro :Book= {id:50, title: 'titulo', description: 'desc'};
  otroLibro :Book= {title: 'titulo', description: 'desc'};

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.$bookList=this.bookService.getBooks();
  }

  handleError(){

  }

  newBook(){
    this.router.navigate(['/newBook']);
  }

  test(){
    console.log(`un libro id+1: ${this.unLibro.id+1} id-1: ${this.unLibro.id-1}`);
    console.log(`otro libro id+1: ${this.otroLibro.id+1} id-1: ${this.otroLibro.id-1}`);
    console.log(this.unLibro);

  }

}
