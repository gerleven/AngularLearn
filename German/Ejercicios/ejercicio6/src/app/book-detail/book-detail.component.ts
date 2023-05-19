import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  template: `
    <h2>Detalles del Libro: {{ id }}</h2>
    <button [routerLink]="'/books/'">Volver</button>
    <button routerLink="/books/">Volver 2</button>
  `,
  styles: [],
})
export class BookDetailComponent implements OnInit {
  constructor(activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
  }

  id;

  ngOnInit(): void {}
}
