import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tito = {id: 1, nombre: "alberto", apodo: undefined}

  ngOnInit(){}
  
}
