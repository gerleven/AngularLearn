import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-relleno1',
  template: `
  <h1>Relleno 1<h1>
  <p>subRelleno 1</p>
  <a [routerLink]="['relleno',1]"></a>
  <button (click)="goMainScreen();">Volver</button>
  <button (click)="goRelleno2()">Relleno 2</button>
  `,
  styles: ['p{color: purple; font-size: 15px} h1{font-size:20px}']
})
export class Relleno1Component implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    let id = activatedRoute.snapshot.params['id'];
    /*
    Cuando en el app.routing.ts hacemos esto:
    { path: 'relleno/:id', component: Relleno1Component },
    significa que si ingresamos una url con el formato "relleno/unNumero" eso va a machear con relleno/:id haciendo que el parametro id valgo unNumero
    entonces nos redirige al componente relleno1Component guardando el numerito en el parametro 'id' y una vez en el componete relleno1.componente.ts
    para consultar ese parametro y guardarlo en una variable local hacemos let id = activatedRoute.snapshot.params['id'];
    posteriormente ese id se usa para saber por ejemplo que libro es el que le tenemos que pedir al book.service y con ese libro rellenar el template
    */
    console.log("el activatedRoute.snapshot.params['id']; devuelvo el parametro id, que seria lo que sigue en la irl despues de ")
  }

  ngOnInit(): void {
  }
  goMainScreen(){
   this.router.navigate(['/rellenos']); 
  }
  goRelleno2(){
    this.router.navigate(['/relleno2']);
  }

}
