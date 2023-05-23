import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [`
  //   div{
  //     padding: 30px;
  //     border-radius: 15px;
  //     border: solid 1px red;
  //     background-color: #FFFFF1;   
  //   }
  // `],
})
export class AppComponent {
  title = '04-Estilos';

  ngOnInit(){

  }


  // Clases
  variableConClase = "fondoAmarillo";

  getMyClass(){
    return "textoVioleta";
  }

  myObjectMapClass = {
    bordeAzul: true,
    fondoAmarillo: true,
    esquinasRedondas: true,
    textoVioleta: false,
    textoNegrita: true,
    letraChica: true
  }

  // Styles
  variableConStyle = "blue";
  variableConStyle2 = "red";

  getMyStyle(){
    return "purple"
  }

  myObjectMapStyle = {
    "color": "red",
    "font-size": "smaller"
  }

  getMyObjectMapStyle(){
    let result = {
      ...this.myObjectMapStyle,
      color: "#fff",
      "backgroundColor": this.variableConStyle=="blue" ? "#7fa7e4" : "#e47f7f",
    };
    return result;
  }
  
  returnTrue(){
    return true
  }

  codigo=`
  variableConClase = "fondoAmarillo";

  getMyClass(){
    return "textoVioleta";
  }

  myObjectMapClass = {
    bordeAzul: true,
    fondoAmarillo: true,
    esquinasRedondas: true,
    textoVioleta: false,
    textoNegrita: true,
    letraChica: true
  }

  // Styles
  variableConStyle = "blue";
  variableConStyle2 = "red";

  getMyStyle(){
    return "purple"
  }

  myObjectMapStyle = {
    "color": "red",
    "font-size": "smaller"
  }

  getMyObjectMapStyle(){
    return this.myObjectMapStyle;
  }
  `;

  codigoCss=`
    .bordeAzul{
      border: solid 1px rgb(38, 0, 255);
  }
  
  .fondoAmarillo{
      background-color: rgb(255, 255, 204);
  }
  
  .esquinasRedondas{
      border-radius: 10px;
  }
  
  .textoVioleta{
      color: blueviolet;   
  }
  
  .textoNegrita{
      font-weight: bold;
  }
  
  .letraChica{
      font-size: smaller;
  }
  
  .letraGrande{
      font-size: large;
  }
  `;
}
