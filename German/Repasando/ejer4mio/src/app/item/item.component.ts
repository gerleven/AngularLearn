import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: [".tachado{text-decoration: line-through; color: gray; font-weight: normal;}"],
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input()
  itemHijo: Item;


  @Output()
  emitterDelete = new EventEmitter<Item>(); //Aca en el <> es donde decime de que tipo seria el $event. Si puede ser cualquiera podemos poner "any".
//Ojo aca al importar que no te importe el EventEmitter de Node si no el de Angular, se llaman igual pero son distintos.
  
  cbValue="false";

  eliminarItem2(itemAEliminar: Item){
    console.log(`eliminarItem() recibio el item ${itemAEliminar.description} y le pasa ese item a .emit()`);
    this.emitterDelete.emit(itemAEliminar);
    console.log(`Emitiendo delete de ${this.itemHijo.description}`);
  }
  
  eliminarItem(){
    console.log(`eliminarItem2() llama a .emit() con el this.itemHijo local`);
    this.emitterDelete.emit(this.itemHijo);
    console.log(`Emitiendo delete de ${this.itemHijo.description}`);
  }

  test(a){
    console.log(a);
  }
}