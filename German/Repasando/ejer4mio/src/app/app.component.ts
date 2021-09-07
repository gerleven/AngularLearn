import { Component, OnInit } from '@angular/core';
import { Item } from './item/Item';
import { HttpClient } from '@angular/common/http';
const url ="http://127.0.0.1:8080/items/";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [".tachado{text-decoration: line-through; color: gray; font-weight: normal;}"],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor (private miHttpClient: HttpClient){}
  
  
  
  listaItems: Item[] = []; //Array de Item, donde Item es la interface creada con "interface Item{name:string; terminado: boolean;}"
  //NOTA: La listaItems es pasada al *ngFor, quien la recorre y por cada iteracion guarda/holdea el Item en itemPadreHoldedByngFor, esa variable es la que se bindea luego en el app-item como <app-item  [itemHijo]="itemPadreHoldedByngFor"...>
  
  private refresh(){
    
    this.miHttpClient.get(url).subscribe(
      r=>{
        this.listaItems= r as any;
        console.log("respuesta ",r);
        console.log("lista: ",this.listaItems);
        
        
      },
      e=>{
        this.miErrorHandleFunction(e);
        console.log("error",e);
      }
      );
    }
    
    private miErrorHandleFunction(e){
      console.log(`Error in  API response: ${e}`);
      
    }
    
  ngOnInit(): void {
    console.log("on init");
    
    console.log(this.listaItems);
    this.refresh();
    console.log(this.listaItems);
    
  }

  
  addItem(inputStringItem:string){
    if(inputStringItem==""){return}
    let itemNuevo:Item=
    {
      description: inputStringItem,
      checked: false,
    }
    this.listaItems.push(itemNuevo);
    console.log(`Agregando en el padre a ${itemNuevo.description}`);
  }

  deleteItem(i:Item){
    console.log(`borrando2 en el padre a ${i.description}`);
    let num = this.listaItems.indexOf(i);
    if(num!=-1){
      this.listaItems.splice(num,1);
    }
  }
  
  checkItem(){

  }

  test(){
    console.log("lista after: ",this.listaItems);
    
  }
}