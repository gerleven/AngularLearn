import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  atributoDelPadre="Yo soy tu padre";//<--esta variable es la que le vamos a pasar al hijo
  otroAtributoDelPadre="que la fuerza te acompanie"
}