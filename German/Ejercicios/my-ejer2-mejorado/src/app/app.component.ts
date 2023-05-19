import { Component } from '@angular/core';

interface Item{
  name:string;
  terminado: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [".tachado{text-decoration: line-through; color: gray; font-weight: normal;}"],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  listaItems: Item[] = []; //Array de Item, donde Item es la interface creada con "interface Item{name:string; terminado: boolean;}"

  agregarItem(inputStringItem){
    if(inputStringItem==''){return;}
    
    let itemNuevo:Item=
    {
      name: inputStringItem,
      terminado: false,
    }
    this.listaItems.push(itemNuevo);
  }
  eliminarItem(num: number){
    if(num!=-1){
    this.listaItems.splice(num,1);
    }
  }

  test(a){
    console.log(a);
  }
}
