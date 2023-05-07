import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: string[] = ["Item1", "Item2", "item3", "item4", "item5", "item6"] as string[];
  input:string = "";

  addItem(){
    if(this.input!="")
    {
      this.items.push(this.input);
    }
  }
  
  deleteLastItem(){
    this.items.pop();
  }

  trackByFn(index: number, item: any){
    console.log(`trackByFn ${index} - ${item}`);
  }
  nota(){
    return "Usar siempre ng-templates separados para el ngIfThen y el ngFor, porque la iteracion del ngFor se rompe y hace una primera iteracion fantasma cuando en el mismo ng-template juntas el #ifThen con el ngFor como aca: <ng-template #itemsList ngFor [ngForOf]='items' let-item let-indice='index' let-primero='first'>"
  }

  test(e: any){
    console.log(this.items);
    debugger
    return "test done"
    
  }
}
