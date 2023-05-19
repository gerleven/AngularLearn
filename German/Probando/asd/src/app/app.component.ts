import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  // <h1>Probando3</h1>
  // <p style="white-space: break-spaces;">{{consola}}</p>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  consola: string = "Consola:\n\n";
  
  private printConsola(i: string=""){
    this.consola = this.consola + i + "\n";
  }

  name: string  = "German";

  setName(name:string){
    this.name = name;
  }


  ngOnInit(){
    let michi: Gato = new Gato("megan");
    michi.saludar();
    michi.decir(michi.raza);
    michi.raza="Tigered"; 
    michi.decir(michi.raza);
    
    if(michi instanceof Animal){
      michi.comer()
    }
    if(michi instanceof Gato){
      michi.maullar();
    }

    //Interfaces vs Clases:
    let german: Persona = new Persona();
    let personaje1: Personaje = {name: "Purulaio", comer: ()=>{console.log("Personaje rico rico")}}

    personaje1.comer();

    let personaje2: Personaje = new Persona("podemos asignar una Persona a un Personaje");
    console.log(personaje2);

    german.metodo1(1);
    this.printConsola(german.comer())
  }

  


}

 interface Personaje{
  name: string;
  comer: Function;
  saludar?: ()=>void;
}

class Persona {
  public name:string;
  constructor (name:string="Sin Nombre"){
    this.name = name;
  }
  comer(){
    let t = "Persona ñam ñam";
    console.log(t);
    return t;
  }

  //Sobre carga de metodos
  metodo1(p1: string): void;
  metodo1(p1: number): void;
  metodo1(p1: boolean, p2: string): void;
  metodo1(p1: string | number | boolean, p2?: string): void{
    if(typeof p1 === "string"){
      console.log(p1);
    } else if(p2) {
      console.log(p2);
      
    }
  }

  
}

class Animal {
  constructor (private name:string="Sin Nombre"){}
  comer(){
    console.log("Animal ñam ñam");
  }
  decir(dialogo: string){
    console.log(dialogo);
  }

  saludar(){
    console.log("Soy "+this.name)
  }
}


class Perro extends Animal{
  ladrar(){ console.log("Guau!");}
}

class Gato extends Animal{
  private _raza: string = "Chumani";

  get raza(){
    return this._raza
  }
  set raza(raza: string){
    this._raza = raza;
  }
  maullar(){ console.log("Miau!");}
}