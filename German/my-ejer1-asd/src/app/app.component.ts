import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elemento:string='elemento a agregar...';  //asi le decimos que elmento es de tipo string
  elementosArray: string[]=[];              // asi le decimos que es de tipo array de strings
  agregarElemento() : void{
    this.elementosArray.push(this.elemento);
    this.elemento='';
    
    //Como se hace para hace que elemento gane el focus?
    //document.getElementById('inputElement').activeElement;
  }
}
