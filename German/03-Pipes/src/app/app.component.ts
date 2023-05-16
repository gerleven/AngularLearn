import { Component } from '@angular/core';

import { LowercasePipe } from './custom-pipes/lowercase.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  constructor(private lowercasePipe: LowercasePipe){}

  fecha = Date.now();

  valueCustomPipe = this.lowercasePipe.transform("MOSTRAR En Minusculas y la primera con mayusculas", 'firstMayus', 'lastMayus');

  codigo = `
  archivo lowercase.pipe.js:
  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'MyLowercase'
  })
  export class LowercasePipe implements PipeTransform {
    transform(value: string | null): string | null{
      if(value){
          return value.toLowerCase();
      } else return null;
    }
  }`;

  test() {
    console.log(this.fecha);
    debugger;
  }
}
