import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  titles: string[] = [];

  constructor(private httpClient: HttpClient) { }

  search(title: string) {

    this.titles = [];

    let url = "/books/v1/volumes?q=intitle:" + title; //Notar que aca ya no usamos la ruta entera ("https://www.googleapis.com/books/v1/volumes?q=intitle:"+title), usamos la ruta relativa gracias al proxy

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
}