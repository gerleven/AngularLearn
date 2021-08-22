import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Item } from "./item/Item";
import {map,catchError} from "rxjs/operators";
import { Observable, throwError } from "rxjs";


const url:string ="http://127.0.0.1:8080/items/";

@Injectable({providedIn: 'root'})
export class ItemService{
    constructor(private httpClient: HttpClient){}

    getItems(): Observable<Item[]>{ //aca devolvemos un observable de array de items, mientras que en addItem devolvemos un solo Item en vez de un array
        return this.httpClient.get(url).pipe(
            map(response=> response as any), //[array1].map(callbackFunction) retorna un nuevo array2 cuyos elementos son los que retorna la callBackFunction tomando como input cada elemento del array1.
            //El .get() retorna un Observable, luego esto retorna un array de 1 solo elemento, ese elemento del array es un response en formato any, como por ejemplo {description: "asd", checked: false, id: "17"}
            catchError(error=>throwError("getItems: Server Error"))
        ) as Observable<Item[]>; //este as es redundando porque ya lo hace el map, pero lo dejo para que se veo que es un array de item <Item[]> y no un <Item> solo.
    }

    //this.httpClient.post(url,{description:inputStringItem,checked:false}).subscribe(
    addItem(inputStringItem): Observable<Item>{
        return this.httpClient.post(url,{description:inputStringItem,checked:false}).pipe(
            //map(response => response as any), // Aca en realidad el map() no hace falta porque no queremos hacerle ninguna transformacion al Item, lo queremos mostrar tal cual como viene. En el caso del ejemplo 12 si hacia falta porque recibiamos libros y de cada libro solo queriamos el titulo
            catchError(error=>throwError("AddItem: Server Error"))
        ) as Observable<Item>; //Como no use el map para trasformar el response a formate any lo tengo que paresear aca antes de retornarlo.
    }

    deleteItem(item: Item){ //el : Observable<Item> se puede omitir
        return this.httpClient.delete(url+item.id).pipe(
            map(response => response as any),
            catchError(error=>this.myHandleError(error)) //este error podria ser manejado de manera de mas alto nivel como vemos mas abajo
        )
        
    }

    checkItem(checekItem: Item): Observable<Item>{ //Aca no es Observable<Item[]> si no Observable<Item> solo
        return this.httpClient.put(url+checekItem.id,checekItem).pipe(
            map(response => response as any),
            catchError(error=>throwError("checkItem: Server Error"))
        )
    }

    //Manejando los errores de manera mas alto nivel:
    private myHandleError(error: any){
        console.error(error);
        return throwError(`Server Error: ${error.text()}. status: ${error.status}`);
    }
}
