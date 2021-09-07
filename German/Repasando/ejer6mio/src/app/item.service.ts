import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { Item } from './item/Item';

const url:string  ="http://127.0.0.1:8080/items/";


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private myHttpClient: HttpClient) { }
  

  listaItems: Item[] = [];

  public getItems(): Observable<Item[]>{
    return this.myHttpClient.get(url).pipe(
      map(r=> r as any),
      catchError(error => throwError('Server error ocurred'))
    );
    
  }

  public addItem(itemNuevo: Item): Observable<Item>{
    return this.myHttpClient.post(url,itemNuevo).pipe(
      map(response=>response as any),
      catchError(error=>throwError('Server error ocurred'))
    );
  }

  public deleteItem(item:Item): Observable<Item>{
    return this.myHttpClient.delete(url+item.id).pipe(
      map(response=>response as any),
      catchError(error=>throwError('Server error ocurred'))
    );

  }

  public checkItem(id:number,itemUpdated: Item): Observable<Item>{
    return this.myHttpClient.put(url+id,itemUpdated).pipe(
      map(response=>response as any),
      catchError(error=>throwError('Server error ocurred'))
    );
  }


  private myErrorHandleFunction(e){
      console.log(`Error in  API response: ${e}`);
  }

    
}
