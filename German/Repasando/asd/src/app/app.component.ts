import { Component } from '@angular/core';
class Animal {
  constructor (private name:string="Sin Nombre"){}
  comer(){
    console.log("ñam ñam");
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

                            @Component({
                              selector: 'app-root',
                              templateUrl: './app.component.html',
                              styleUrls: ['./app.component.css']
                            })
                            export class AppComponent {
                            
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
                                let personaje1: Personaje = {name: "Purulaio", comer: ()=>{console.log("rico rico")}}

                                personaje1.comer();

                                let personaje2: Personaje = new Persona("podemos asignar una Persona a un Personaje");
                                console.log(personaje2);

                                german.metodo1(1)
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
    console.log("ñam ñam");
  }

  metodo1(p1: string): void;
  metodo1(p1: number): void;
  metodo1(p1: number, p2: string): void;
  metodo1(p1: string | number, p2?: string): void{
    if(typeof p1 === "string"){
      console.log(p1);
    } else if(p2) {
      console.log(p2);
      
    }
  }

}
