import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: string[] = ["Item1", "Items2"] as string[];
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
}
