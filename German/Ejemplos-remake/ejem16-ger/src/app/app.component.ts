import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="title">Library</h1>
    <router-outlet></router-outlet>`}) // <-- Este es el "hueco" que iran cmabiando segun vaya cambiando la url del browser
export class AppComponent { }
