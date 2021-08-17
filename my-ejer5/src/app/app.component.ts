import { ItemService } from './ItemService';
import { Component, OnInit } from '@angular/core';
import { Item } from './item/Item';

const url:string ="http://127.0.0.1:8080/items/";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [".tachado{text-decoration: line-through; color: gray; font-weight: normal;}"],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  //Array de Item, donde Item es la interface creada con "interface Item{name:string; terminado: boolean;}"
  
  constructor(private itemService: ItemService){} //inyectamos la dependencia del httpClient
  //a partir de ahora ya podemos hacer uso de los 5 verbos de la API por ejemplo usando this.httpClient.get(url).subscribe()...


  
  itemsList: Item[] =[];
  

  ngOnInit(){
    this.refresh();
  }

  //METODOS de Item:

  private refresh(){
    this.itemService.getItems().subscribe(
      items => this.itemsList = items, //Esta parte repetitiva es la que se puede evitar despues usando el Async Pipe, ver ejercicio 5b
      error => this.handleError(error)
    );
  }

  private handleError(error){
    console.log(error);
  }

    
  agregarItem(inputStringItem:string){
    if(inputStringItem==""){return}

    //Testeando los Observables:
    /*
    let test = this.itemService.addItem(inputStringItem); //Por lo que entiendo creo que aca recibo un Observable<Item> y como es un observable me puedo subscribir con .subscribe(callBackExito, callbackError, otrasVoidCallBacks)
    console.log("test: ",test);
    test.subscribe(r=>{this.refresh(); console.log("r: ",r)}, e=>console.log("e: ",e), ()=>console.log("otra mas"));
    */

    this.itemService.addItem(inputStringItem).subscribe(
      result => {
        console.log(`Aca podriamos usar el result=[${result}] para algo`);
        this.refresh()
      },
      error => this.handleError(error)
    );
    
  }

  deleteItem(item:Item){
    this.itemService.deleteItem(item).subscribe(
      result => this.refresh(), //Aca el result esta en color mas oscuro porque no lo usaste para nada
      error => this.handleError(error)
    );
  }

  checkItem(checekItem: Item){
    this.itemService.checkItem(checekItem).subscribe(
      result => this.refresh(),
      error => this.handleError(error)
    );
  }

  test(a){
    console.log(a);
  }
}