import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  consola: string = "Consola:\n\n";
  
  private printConsola(i: string=""){
    this.consola = this.consola + i + "\n";
  }


ngOnInit(){
  this.saludar("p1 String");
  this.saludar(1, true);
  this.metodo();
}

//Firmas
saludar(): void; //todos los parametros tendran que tener un void
saludar(p1: string): void;  //el primer parametro tendra que tener un string
saludar(p1: number): void; //el primer parametro tendra que tener un number
saludar(p1: boolean, p2: number): void;  //el primer parametro tendra que tener un boolean y el segudo un number
saludar(p1: number, p2: boolean): void; //el primer parametro tendra que tener un number y el segudo un boolean

//Definicion del metodo
saludar(p1: string|number|void|boolean, p2: boolean|number|void){
  console.log("saludar...")
  if(typeof p2 == "boolean"){
    console.log(`p1: ${p1} - p2:${p2}.`);
  }
}

  metodo(): void;
  metodo(p1: string): void;
  metodo(p1: number): void;
  metodo(p1: string, p2: number): void;
  metodo(p1: number, p2: boolean): void;

  metodo(){
    this.printConsola("Si agrego p1 y p2 a la definicion de este metodo ya sale error en las firmas")
  }

}
