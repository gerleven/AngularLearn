import { Component } from '@angular/core';
import { BookGeneralService } from './book-general.service';
import { BooksServiceExclusivo } from './books.service.exclusivo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [BooksServiceExclusivo]//           <-- BookService no esta inyectado en el root, entonces lo inyectamos en este componente nad amas
})
export class AppComponent {

  titles: string[]=[];
  mensajePromesa=false;

  constructor(private httpClient: HttpClient, private booksServiceExclusivo: BooksServiceExclusivo, private booksServiceGeneral: BookGeneralService) { }
  
  //booksServiceExclusivo - Servicio no singleton y exclusivo solo para este componente.
  searchMyLocalBooks(title: string) {
    this.titles = this.booksServiceExclusivo.getTitles(title);
  }

  //booksServiceGeneral - Servicio singleton disponible para todos los componentes:
  

  //httpClient directo (no recomentado):
  searchGoogleApiBooks_httpClient(title: string){
    const url="https://www.googleapis.com/books/v1/volumes?q=intitle:";
    this.httpClient.get(url).subscribe(
      response => {
        let data: any = response;
        
        for (var i = 0; i < data.items.length; i++) {
          let bookTitle = data.items[i].volumeInfo.title;
          this.titles.push(bookTitle);
        }
      },
      error => console.error(error)
    );
  }

  //Callbacks (Esta forma no es explicada por Micael, solo muestra este pedazo de sintaxis muy por arriba):
  searchGoogleApiBooks_callBacks(title: string){     
    this.titles=this.booksServiceGeneral.searchBookCallback( title, (error, books) => {
                                                                                        if(error){return []}
                                                                                        else{return books}
                                                                                      }
    );     
  }

  /*
  //Promise  (Las promesas tampoco las explica demasiado):
  searchGoogleApiBooks_promise(title: string){
    this.titles=this.booksServiceGeneral.searchBookPromise(title)
    .then()
    .catch(); //este catchpodria no estar
  }
  
  //Promise con Await (tampoco las explica demasiado):
  searchGoogleApiBooks_promiseConAwait(title: string){
    try{
      this.titles= await this.booksServiceGeneral.searchBookPromiseAwait(title);
      console.log(this.titles);
      
    } catch(error){
      console.log(error);
      
    }
  }
  */

  searchGoogleApiBooks_promise(){
    this.mensajePromesa=true;
  }

  //Observable
  searchGoogleApiBooks_observable(title: string){
    this.booksServiceGeneral.searchBookObservable(title).subscribe(
      r=>this.titles=r,
      e=>this.titles=[]
    );
  }

}