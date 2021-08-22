import { ItemService } from './ItemService';
import { Component, OnInit } from '@angular/core';
import { Item } from './item/Item';
import { Observable } from 'rxjs';

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


  
  $itemsList: Observable<Item[]>;
  

  ngOnInit(){
    this.refresh();
  }

  //METODOS de Item:

  private refresh(){
    this.$itemsList = this.itemService.getItems();
  }

  private handleError(error){
    console.log(error);
  }

    
  agregarItem(inputStringItem:string){
    if(inputStringItem==""){return}

    this.itemService.addItem(inputStringItem).subscribe(
      //()=>this.$itemsList=this.itemService.getItems() //Si no tubiese la funcion de refresh tendria que hacer el get despues del addItem asi comoe esta aca
      ()=>this.refresh(),
      error => this.handleError(error)
    );
    
  }

  deleteItem(item:Item){
    this.refreshWhenFinish(this.itemService.deleteItem(item)); //Esta es la estrategia que uso Micael, para no tener que subscribirte cada vez hizo una funcion aparte y la invoca con el observable que nos retorna cada una de las 4 metodos como addItem() o deleteItem()
  }

  checkItem(checekItem: Item){
    this.itemService.checkItem(checekItem).subscribe(
      () => this.refresh(),
      error => this.handleError(error)
    );
  }

  test(a){
    console.log(a);
  }

  refreshWhenFinish(ob: Observable<Item>){
    ob.subscribe(
      _=>this.refresh(), //el "_" significa "independientemente de cual sea la respuesta..."
      error => this.handleError(error)
      );
  }
}