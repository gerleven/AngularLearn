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
  emitterDelete = new EventEmitter<Item>();
  
  @Output() emitterCheck = new EventEmitter<Item>();

  eliminarItem(){
    this.emitterDelete.emit(this.itemHijo);
  }

  checkItem(){
    this.emitterDelete.emit(this.itemHijo);
  }

}