import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './item/Item';
const url ="http://127.0.0.1:8080/items/";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private miHttpClient: HttpClient) { }

  listaItems: Item[] = [];

  public getBooks(){
    this.miHttpClient.get(url).subscribe(
      r=>{
        this.listaItems= r as any;
        console.log("respuesta ",r);
        console.log("lista: ",this.listaItems);
        
        
      },
      e=>{
        this.miErrorHandleFunction(e);
        console.log("error",e);
      }
      );
    }
    private miErrorHandleFunction(e){
      console.log(`Error in  API response: ${e}`);
      
    }

    add
  }
