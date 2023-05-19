import { HttpClient } from '@angular/common/http';
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
  
  constructor(private httpClient: HttpClient){} //inyectamos la dependencia del httpClient
  //a partir de ahora ya podemos hacer uso de los 5 verbos de la API por ejemplo usando this.httpClient.get(url).subscribe()...


  
  listaItems: Item[] =[];
  

  ngOnInit(){
    this.refresh();
  }

  private refresh(){
    this.httpClient.get(url).subscribe(
      response => this.listaItems = response as any,
      /*response=>{
        let items: any = response;
        items.forEach(element => {
          this.listaItems.push(element);
        });
      },*/
      error=>this.handleError(error)
    );
  }

  private handleError(error){
    console.log(error);
  }

  agregarItem(inputStringItem:string){
    if(inputStringItem==""){return}
    
    this.httpClient.post(url,{description:inputStringItem,checked:false}).subscribe(
      response => this.refresh(),
      error => this.handleError(error)
    );
  }

  eliminarItem(i:Item){
    this.httpClient.delete(url+i.id).subscribe(
      response => this.refresh(),
      error => this.handleError(error)
    );
  }

  checkItem(checekItem: Item){
    this.httpClient.put(url+checekItem.id,checekItem).subscribe(
      response => this.refresh(),
      error => this.handleError(error)
    );
  }

  test(a){
    console.log(a);
  }
}