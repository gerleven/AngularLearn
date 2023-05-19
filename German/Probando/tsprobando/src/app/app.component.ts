import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tsprobando';
  salida = "hola"

  constructor (){}

  
  numero(): number{
    return 5;
    
  }

  probandoType(){


    function printLabel (obj: any){
      console.log(obj.label);      
    }

    console.log(printLabel({prop1: "algo", lebal: "escribi Lebel mal a proposito, no tendra ningun lebel para printear"})); //Mi funcion printea la propiedad label del obj pero
    //como le puse any ts no me avisa que le estoy pasando un obj que no comple con esa propiedad, para solucionar esto existen los tipos nombrados: 
    //por ejemplo "type labeled= {label: string}":

    
    type SquareConfig = {
      color: string;
      width?: number;
    }
    function createSquare(config: SquareConfig){
      console.log(`Se creo un cuadrado de color ${config.color}`, config.width?'y ancho '+config.width:' sin ancho.');
    }
    
    //createSquare({color: "blue", width: "20px"}); //esta me la rebota porque width no es un number
    //createSquare({color: "blue", width: 20, algoMas: 20}); //esta me la rebota porque tiene una propiedad extra a la que especifique en type SquareConfig
    createSquare({color: "blue"});
    createSquare({color: "blue", width: 20});
  }

  //Clases en ts
  hola2: string;
  probandoClasesEnTS(){
    console.log("Es obligatorio declarar los atributos de la clase: ",this.hola2); //Si pongo hola1 en vez de hola2 Me va a decir que el atributo hola1 no existe para la clase
    
  }
  
  /*
  constructor (public algo: string){
    console.log(algo);
  }
  */
  
  
}
