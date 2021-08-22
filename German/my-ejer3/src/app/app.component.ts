import { Component } from '@angular/core';
import { Item } from './item/Item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [".tachado{text-decoration: line-through; color: gray; font-weight: normal;}"],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  listaItems: Item[] = []; //Array de Item, donde Item es la interface creada con "interface Item{name:string; terminado: boolean;}"
  
  agregarItem(inputStringItem:string){
    if(inputStringItem==""){return}
    let itemNuevo:Item=
    {
      name: inputStringItem,
      terminado: false,
    }
    this.listaItems.push(itemNuevo);
    console.log(`Agregando en el padre a ${itemNuevo.name}`);
  }

  eliminarItem(i:Item){
    console.log(`borrando2 en el padre a ${i.name}`);
    let num = this.listaItems.indexOf(i);
    if(num!=-1){
      this.listaItems.splice(num,1);
    }
  }

  test(a){
    console.log(a);
  }
}