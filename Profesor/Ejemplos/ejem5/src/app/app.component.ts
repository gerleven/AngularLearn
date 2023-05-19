import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*styles: [`
	.red { color: red; }
	.blue { color: blue; }
  .yellow { color: yellow; }
   .bold { font-weight: bold; }
  `],*/
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //1) activar clase
  //<h1 [class]="classGer">Prueba Ger</h1>
    classGer = "cyan";
    hazloPinky(){
    this.classGer="pinky";
  }
  queVariableUso(){
    return this.classGer;
  }
  //2) activar clase mediante un boolean
  //<h1 [class]="classGer" [class.bold]="enNegritasBool">Prueba Ger</h1>
  enNegritasBool = true;
  activarNegritas(){
    this.enNegritasBool=!this.enNegritasBool;
  }

  //3 activar clase con un string
  objMapaClases={ //Activar las clases con un mapa de string a boolean
    "pinky":true,
    "bold": false,
    "chocolate": false
  }
  activarChocolate(){
    this.objMapaClases.chocolate= true;
    this.objMapaClases.pinky= false;
    /*
    for(let i in this.objMapaClases){ //Por que no funciona el for in para recorrer los keys de un objeto?
      i=false;
    {
    */
  }
  
//4)
tamanioLetra=10;
agrandarTamanio(){
  this.tamanioLetra+=5;
}
achicarTamanio(){
  this.tamanioLetra-=5;
}

estilos={
  'font-size': '20px',
    'color':'black',
    'font-weight': this.enNegritasBool?'bold':'normal',
  }
aplicarEstilos(){
  return this.estilos;
}
aplicarEstilos1(){
  this.estilos= {
    'font-size': '25px',
    'color': 'blue',
    'font-weight': this.enNegritasBool?'bold':'normal',
  }
}
aplicarEstilos2(){
  this.estilos= {
    'font-size': '30px',
    'color': 'grey',
    'font-weight': this.enNegritasBool?'bold':'normal',
  }
}

  name = "Anybody";

  className = "red";
  redActive = true;
  

  num = 2;
  visible = false;

  elems = [
    { desc: 'Elem1', check: true },
    { desc: 'Elem2', check: true },
    { desc: 'Elem3', check: false }
  ]

  pClasses = {
    red : true,
    bold: false
  }

  setClass(className:string){
    this.className = className;
    this.redActive = (className === 'red');
  }

  changeParagraph(){
    this.pClasses.bold = !this.pClasses.bold; //Esto modifica el mapa de string a boolean pCLasses para que bold pase de false  atrue
  }

  showText(){
    this.visible = true;
    this.num = 3;
  }
}