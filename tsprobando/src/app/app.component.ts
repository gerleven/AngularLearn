import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tsprobando';
  salida = "hola"

  numero(): number{
    return 5;
    
  }

  probandoType(){
    type SquareConfig = {
      color: string;
      width?: number;
    }
    function createSquare(config: SquareConfig){
      console.log(`Se creo un cuadrado de color ${config.color}`, config.width?'y ancho '+config.width:' sin ancho.');
    }
    
    //createSquare({color: "blue", width: "20px"});
    //createSquare({color: "blue", width: 20, algoMas: 20});
    createSquare({color: "blue"});
    createSquare({color: "blue", width: 20});
  }
  
  
}
