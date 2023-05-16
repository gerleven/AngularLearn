import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  fecha = Date.now();
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


  test(){
    console.log(this.fecha);
    debugger    
  }
}
