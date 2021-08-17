import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BooksService {

  constructor(private httpClient: HttpClient) { }

  getTitles(title: string): Observable<string[]> { //Importante poner el ": Observable<string[]>"
    let url = "https://www.googleapis.com/books/v1/volumes?q=intitle:" + title;
    return this.httpClient.get(url).pipe(     // Aca em vez de subscribirnos como haciamos antes con el httpClient ahora recibimos directamente el Observable del .get() y lo mandamos al pipe y map para manipularlo y trasformarlo al formato que queremos.
      map(response => this.extractTitles(response as any))
    );
  }

  private extractTitles(response) {
    return response.items.map(book => book.volumeInfo.title)
  }
}
