import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  template: `
    <h2>Tu Lista de libros:</h2>
    <button [routerLink]="['/bookDetail/', '1']">Book-1 Details</button>
    <button (click)="irAFormBook(1)">Book-1 Form</button>
  `,
  styles: [],
})
export class BookListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  irAFormBook(id) {
    this.router.navigate(['/bookForm/1']);
  }
}
