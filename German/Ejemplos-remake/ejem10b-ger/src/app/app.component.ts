import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Cuidado aca que no te importe el HttpClientModule o que si te importe el HttpClient pero no el de @angular/common/http


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  titles: string[]= [];

  constructor(private httpClient: HttpClient){}

  searchBook(book: string){
    //let url="https://www.googleapis.com/books/v1/volumes?q=intitle:"+book
    let url="/books/v1/volumes?q=intitle:"+book
    //NOTA: Ahora la ruta es relativa porque tenemos el Proxy
    

    this.httpClient.get(url).subscribe(
      response=>{
        this.titles=[];
        let books: any=response;
        console.log("books.items.length: "+books.items.length+books);
        for( let i=0; i< books.items.length; i++){
          this.titles.push(books.items[i].volumeInfo.title);
        }

      },
      error=>{console.log(error)}
    );
  }
  /*
    Contenido del archivo proxy.config.json dentro de la carpeta src:
      {
          "/books/*": {
              "target": "https://www.googleapis.com/",
              "secure": false,
              "logLevel": "debug",
              "changeOrigin": true
          }
      }

      Comando para ejecutar la App desde el proxy:
      $ ng serve --proxy-config proxy.conf.json
      
      Ruta relativa del codigo:
      let url = "/books/v1/volumes?q=intitle:" + title;  
  */
}