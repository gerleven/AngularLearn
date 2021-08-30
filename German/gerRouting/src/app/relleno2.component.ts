import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-relleno2',
  template: `
  <h1>Relleno 2<h1>
  <p>subRelleno 2</p>
  <a [routerLink]="['relleno',2]"></a>
  <button (click)="goMainScreen();">Volver</button>
  <button (click)="goRelleno1()">Relleno 1</button>
  `,
  styles: ['p{color: red; font-size: 15px} h1{font-size:20px}']
})
export class Relleno2Component implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    let id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  goMainScreen(){
    this.router.navigate(['/rellenos']); 
   }
   goRelleno1(){
    this.router.navigate(['/relleno1']);
  }

}
