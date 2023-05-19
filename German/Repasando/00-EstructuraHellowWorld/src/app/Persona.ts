export class Persona{
  private _nombre:string;
  private _edad:number;

  //contructor(private nombre:string, private edad: number){ //Por que no me funciono lo de ponerle private aca y que funcione?
    contructor(nombre:string, edad: number){
      this._nombre=nombre;
      this._edad=edad;
    }
  
    get nombre(){
      return this._nombre;
    }
    get edad(){
      return this._edad;
    }
  
    saludar(): void{
      console.log(`Hola soy ${this.nombre} y tengo ${this.edad}`);
    }

    saludar2(muletilla:string): void{ //Como se hace para hacer el metodo sobrecargado?
      console.log(`Hola soy ${this.nombre} y tengo ${this.edad} ${muletilla}`);
    }
  }