import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
const url="https://www.googleapis.com/books/v1/volumes?q=intitle:";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'}) //Este servicio sera un singleton y estara disponible para todos los componentes
export class BookGeneralService {

  constructor(private myHttpClient: HttpClient) { }
  
  libros: string[]=[];

  searchBookSincrono(book: string): string[]{
    //this.libros = this.myHttpClient.get(url+book); //esta seria una implementacion sincrona, donde al ejecutar el get me bloqueo esperando que termine de ejecutarse y no continuo hasta no tener la respuesta
    //Eso en JS no se puede hacer, hay que implementarlo si o si de manera Asincrona, y para eso se usan las callbacks, las promesas o los observables
    return [];
  }

  //Implementado de esta manera, este metodo del servicio responde siempre lo mismo para cualquier componente que lo invoce, mientras con con las callbacks el response ejecuta la funcion de exito que le pasaste en la callback
  searchBookHttpClient(book: string): string[]{
    this.myHttpClient.get(url+book).subscribe( //El subscribe recibe como parametros 2 callbacks functions, la primera se ejecuta en caso de recibir exitosamente una respuesta pro parte de la API y la egunda enc aso de error
      response => { 
        let data: any = response;
        for (var i = 0; i < data.items.length; i++) {
          let bookTitle = data.items[i].volumeInfo.title;
          this.libros.push(bookTitle);
        }
      },
      error => {console.log("e",error);
      this.libros= ["vacio"];
      }
    );
    return this.libros;
  }

  searchBookCallback(book: string, f): string[]{
    this.myHttpClient.get(url+book).subscribe(
      response => {f.book},
      error => {f.error}
    );
    return [];
  }

  /*
  searchBookPromise(book: string): Promise<string[]>{
    //return this.myHttpClient.get(url+book)...
  }

  searchBookPromiseAwait(book: string): Promise<string[]>{
    //return this.myHttpClient.get(url+book)...
  }
*/

  searchBookObservable(book: string): Observable<string[]>{
    return this.myHttpClient.get(url+book).pipe(
      map(response => this.obtenerTitulos(response as any))
    );
  }

  private obtenerTitulos(response) {
    return response.items.map(book => book.volumeInfo.title)
  }
}
