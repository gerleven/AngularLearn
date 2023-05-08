import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  fecha = Date.now();


  test(){
    console.log(this.fecha);
    debugger    
  }
}
