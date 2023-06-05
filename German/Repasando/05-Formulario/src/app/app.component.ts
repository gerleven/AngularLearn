import { Component, ElementRef, ViewChild } from '@angular/core';

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
  
  toSaveTitleInput: string = "refInput default value";
  itemList = ["Item1", "Item2"]
  addItem(value: string){
    this.itemList.push(value);
  }

  // Antes se podia inicializar asi la variable anotada con ViewChild:
  // @ViewChild('title') titleInput: ElementRef;
  //Pero en las versiones mas acctualiza de TypeScript ya no se puede hacer esto y hay que optar por estas 2 opciones:
  // @ViewChild('inputRef') titleInput!: ElementRef<HTMLInputElement>;
  // @ViewChild('title') titleInput!: ElementRef;
  
@ViewChild('inputRef') titleInput!: ElementRef;

updateTitle(){
  this.title = this.titleInput.nativeElement.value;
  this.titleInput.nativeElement.value = '';
  this.titleInput.nativeElement.focus();
}
  


}
