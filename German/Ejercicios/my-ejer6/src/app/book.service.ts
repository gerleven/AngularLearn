import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import {map,catchError} from "rxjs/operators";
import { Book } from './Book';

const url = 'http://127.0.0.1:8080/books/';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.httpClient.get(url).pipe(
      catchError(error => this.myHnadledError(error))
    ) as Observable<Book[]>;
  }

  getBook(id: number): Observable<Book>{
    return this.httpClient.get(url+id).pipe(
      catchError(error => this.myHnadledError(error))
    ) as Observable<Book>;
  }

  existeLibro(id: number): boolean{
    let libro: Book;
    this.httpClient.get(url+id).subscribe(
      r=>libro=r as Book
    );
    return libro.id !== undefined;
  }

  saveBook(book: Book){
    return this.httpClient.post(url, book).pipe(
      catchError(error=>this.myHnadledError(error))
    );
  }

  editBook(id: number, book: Book){
    return this.httpClient.put(url+id, book).pipe(
      catchError(error=>this.myHnadledError(error))
    ) as Observable<Book>;
  }

  deleteBook(book){
    return this.httpClient.delete(url+book.id).pipe(
      catchError(error=>this.myHnadledError(error))
    ) as Observable<Book>;
  }

  myHnadledError(e){
    return throwError(`An error occurred: ${e}`);
  }
}
