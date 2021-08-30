import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rellenos',
  template: `
  <h1>Rellenos:<h1>
    <p>probando git....</p>
  <a [routerLink]="['/relleno',1]">relleno1</a>
  <a [routerLink]="['/relleno',2]">relleno2</a>
  
  <button (click)="goRelleno1();">Relleno 1</button>
  <button (click)="goRelleno2()">Relleno 2</button>
  `,
  styles: ['p{color: purple; font-size: 15px} h1{font-size:20px}']
})
export class RellenosComponent implements OnInit {

  constructor(private router: Router, activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  goRelleno1(){
    this.router.navigate(['/relleno1']);
  }
  goRelleno2(){
    this.router.navigate(['/relleno2']);
  }


}
