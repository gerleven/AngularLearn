import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: [".tachado{text-decoration: line-through; color: gray; font-weight: normal;}"],
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  ngOnInit(): void {
    console.log("ngOnInIt!");
  }
  @Input()
  itemHijo: Item;


  @Output()
  emitterDelete = new EventEmitter<Item>(); //Aca en el <> es donde decime de que tipo seria el $event. Si puede ser cualquiera podemos poner "any".
//Ojo aca al importar que no te importe el EventEmitter de Node si no el de Angular, se llaman igual pero son distintos.
  
  @Output()
  emitterCheck = new EventEmitter<Item>();


  eliminarItem2(itemToDelete: Item){
    this.emitterDelete.emit(itemToDelete);
  }
  
  eliminarItem(){
    console.log("item que paso para eliminar: ",this.itemHijo);
    this.emitterDelete.emit(this.itemHijo);
  }

  checkItem(){
    this.itemHijo.checked=!this.itemHijo.checked;
    this.emitterCheck.emit(this.itemHijo);
  }
}