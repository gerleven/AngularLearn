import { Component } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  titles: string[] = [];

  constructor(private service: BooksService) { }

  search(title: string) {

    this.titles = [];

    this.service.getTitles(title).subscribe( //este servicio es de alto nivel porque no me devuelve el response entero si no que me da un array de titulos
      titles => this.titles = titles,
      error => console.error(error)
    );
  }
}
