import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-form',
  template: `
    <h2>Formulario del Libro {{ id }}</h2>
    <button (click)="volver()">Volver</button>
    <br />
    <button (click)="previo()">Prev</button>
    <button (click)="siguiente()">Next</button>
  `,
  styles: [],
})
export class BookFormComponent implements OnInit {
  id: number;

  constructor(private router: Router, ar: ActivatedRoute) {
    //this.id=Number.parseInt(ac.snapshot.params['id']);
    ar.params.subscribe(
      (p) => (this.id = Number.parseInt(p['id'])),
      (e) => console.log('Error: ', e)
    );
  }

  ngOnInit(): void {
    console.log(
      Number.parseInt('13') + 1, //14
      +'13' + 1, //14
      '13' + 1 //131
    );
  }

  volver() {
    //this.r.navigate(['/books']);
    console.log('-.-');
    this.router.navigate(['/books/']);
  }

  siguiente() {
    this.router.navigate([`/bookForm/${this.id+1}`]);
  }
  previo() {
    if (this.id===1) return;
    this.router.navigate([`/bookForm/${this.id-1}`]);
  }
}
