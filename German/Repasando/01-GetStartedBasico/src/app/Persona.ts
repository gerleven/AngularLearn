export class Persona{
  private _nombre:string;
  private _edad:number;

  //contructor(private nombre:string, private edad: number){ //Por que no me funciono lo de ponerle private aca y que funcione?
    constructor(nombre:string, edad: number){
      this._nombre=nombre;
      this._edad=edad;
    }
  
    //Getters
    get nombre(){
      return this._nombre;
    }
    get edad(){
      return this._edad;
    }

    //Setters
    set nombre(n: string){
      this._nombre = n;
    }
  
    //Sobrecarga de metodo
    saludar(): string;
    saludar(muletilla: string): string;
    saludar(muletilla?: string): string{
      return `Hola soy ${this.nombre} y tengo ${this.edad}. ${muletilla?muletilla:""}`;
    }
  }