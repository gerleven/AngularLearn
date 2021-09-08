import { Component, OnInit } from '@angular/core';
import { Item } from './item/Item';
import { identifierModuleUrl } from '@angular/compiler';
import { ItemService } from './item.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [".tachado{text-decoration: line-through; color: gray; font-weight: normal;}"],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor (private myItemService: ItemService){}
  
  
  listaItems: Item[] = [];
  
  private refresh(){
    this.myItemService.getItems().subscribe(
      items=> this.listaItems=items,
      e=>this.myErrorHandleFunction(e)
    );
  }
    
  private myErrorHandleFunction(e){
    console.log(`Error in  API response: ${e}`);
    
  }  
    
  ngOnInit(): void {
    this.refresh();
  }

  
  addItem(inputStringItem:string){
    if(inputStringItem==""){return}
    let itemNuevo:Item=
    {
      description: inputStringItem,
      checked: false,
    };

    this.myItemService.addItem(itemNuevo).subscribe(
      r=>this.refresh(),
      e=>this.myErrorHandleFunction(e)
    );
    
  }

  deleteItem(i:Item){
    this.myItemService.deleteItem(i).subscribe(
      r=>this.refresh(),
      e=>this.myErrorHandleFunction(e)
    );
  }
  
  checkItem(i:Item){
    let itemUpdated: Item = {id: i.id, description: i.description, checked: !i.checked };
    this.myItemService.checkItem(i.id, itemUpdated).subscribe(
      r=>this.refresh(),
      e=>this.myErrorHandleFunction(e)
    );
  }

  test(){
    }
}