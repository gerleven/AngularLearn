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
  let url="https://www.googleapis.com/books/v1/volumes?q=intitle:"+book

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
}