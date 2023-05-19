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
      map(response => this.extractTitles(response as any)) //aca en vez de hacer un .pipe() podriamos habernos subscribido al observable que retorna el .get() y ahccer algo dentro del response=>{}
      //pero en vez de hacer this.httpClient.get(url).subscribe(r=>{return algo},e=>{}) directamente retornamos el observale que nos trae el .get() (previamente modificado por el pipe y el map) pero lo que estamos retornando es el observable
      //y por es que depsues en el app.component.ts nos podemos subscribir mediante un .subscribe() al "this.service.getTitles(title)", porque ese "this.httpClient.get(url)" esta retornando un observable.
      );
      //en el ejem13 vemos tambien como manejar el error para dar un mensaje de mas alto nivel al componente
  }

  private extractTitles(response) {
    return response.items.map(book => book.volumeInfo.title)
  }
}
