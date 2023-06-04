import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '05-Formulario';

  // 1- Data binding: Vincular un control del formulario a un atributo del componente
  // input text
  tuNombre: string = "";
  
  // checkBox
  isChecked: boolean = true;
  items = [
    {checked: false, label: "item1"},
    {checked: true, label: "item2"},
    {checked: false, label: "item3"},
  ];
  
  // RadioButtons
  personajeElegido: string = "";
  
  
  // 2- Acceso a los controles desde el código para leer y modificar su estado
  
}
