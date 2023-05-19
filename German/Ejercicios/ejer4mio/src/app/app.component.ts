import { Component, OnInit } from '@angular/core';
import { Item } from './item/Item';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
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
    console.log("Actualizando Items");
    
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
    console.log("Agregando item");
    
    if(inputStringItem==""){return}
    let itemNuevo:Item=
    {
      description: inputStringItem,
      checked: false,
    }
    this.miHttpClient.post(url,itemNuevo).subscribe(
      r=>{
        this.refresh();
        console.log("Item added");
        
      },
      e=>{
        this.miErrorHandleFunction(e);
      }
    );
  }

  deleteItem(i:Item){
    console.log("Eliminando item: ",i);
    
    this.miHttpClient.delete(url+i.id).subscribe(
      r=>{
        this.refresh();
        console.log("item deleted");
        
      },
      e=>{
        this.miErrorHandleFunction(e);
      }
    );
  }
  
  checkItem(i:Item){
    console.log("Checkeando Item...");
    let itemUpdated: Item = {id: i.id, description: i.description, checked: !i.checked };

    this.miHttpClient.put(url+i.id,itemUpdated).subscribe(
      r=>{
        this.refresh();
        console.log("item deleted");
        
      },
      e=>{
        this.miErrorHandleFunction(e);
      }
    );
  }

  test(){
    console.log("lista after: ",this.listaItems);
    
  }
}