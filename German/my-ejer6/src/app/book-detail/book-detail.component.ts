import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Book} from '../Book';
import { BookService } from '../book.service';
import {map,catchError} from "rxjs/operators";
import { Observable, throwError } from "rxjs";


@Component({
  selector: 'app-book-detail',
  template: `
  <div *ngIf="book!==undefined; else noBooks">
    <h1>{{book.id}}</h1>
    <h1>Title: {{book.title}}</h1>
    <h3>Description: {{book.description}}</h3>
    <a *ngIf="mostrarAnterior" [routerLink]="['/bookDetail',anterior]" (click)="refresh();">_Anterior_</a>
    <a *ngIf="mostrarSiguiente" [routerLink]="['/bookDetail',siguiente]" (click)="refresh();">_Siguiente_</a>
    <!--
    <a *ngIf="existe(book.id-1)" [routerLink]="['/bookDetail', book.id-1]">Prev</a>
    <br>
    <a *ngIf="existe(book.id+1)" [routerLink]="['/bookDetail', book.id+1]">Next</a>
  -->
    <!--Este id+1 anda mal, en vez de sumar me concatena-->
  </div>
  <ng-template #noBooks><br><div>Sin libros</div><br></ng-template>

  <div><button (click)="removeBook();">Remove</button>
  <button (click)="editBook();">Edit</button></div>
  <button (click)="goBack();">Back</button>
  <!--<button (click)="testUnLibroyOtroLibro();">TestUnLibro</button>-->
  `,
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {

  //unLibro :Book= {id:50, title: 'titulo', description: 'desc'};
  //otroLibro :Book= {title: 'titulo', description: 'desc'};
  
  book: Book;
  siguiente: number;
  anterior: number;
  mostrarAnterior: boolean;
  mostrarSiguiente: boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private bookService: BookService) {
    console.log("Andres: No entiendo por que con el <a>Prev</a> va bien para atras pero con el Next en vez de sumar 1 al dia lo concatena y se rompe...")
    console.log("tambien me pasaba que se ejecutaban todas las funciones de este archivo una atras de la otra como si las hubiese ejectuado a todas");
    
    activatedRoute.params.subscribe(
      params => {
        bookService.getBook(params['id']).subscribe(
          r=>{
            this.book=r as Book;
            this.siguiente = this.book.id;
            this.anterior = this.book.id;
            this.siguiente++;
            this.anterior--;
            this.mostrarAnterior=this.bookService.getBook(this.anterior)!==undefined; //corregir esto, nunca va a ser distinto de undefined porque devuelve un observable
            this.mostrarSiguiente=this.bookService.getBook(this.siguiente)!==undefined;
            //this.siguiente=(this.book.id+1); //Si lo haces asi anda bien con el - pero con el + no porque lo usa como concatenador de string, no se por que me toma el id como string en vez de como number, no pudimos encontrar el error
            //this.anterior=(this.book.id-1);
            console.log(`id: ${this.book.id} typeof id: ${typeof this.book.id}- anterior: ${this.anterior} - siguiente: ${this.siguiente}`);
            
          },
          e=>console.log("error al traer el libro desde el servicio: ",e)
          );},
      error => console.log("error en la subcripcion a los params: ",error)
    );

    /*
    let id: number = this.activatedRoute.snapshot.params['id'];
    this.bookService.getBook(id).subscribe(
      r=>{
        this.book=r as Book;
        this.siguiente = this.book.id;
        this.anterior = this.book.id;
        this.siguiente++;
        this.anterior--;
        //this.siguiente=(this.book.id+1);
        //this.anterior=(this.book.id-1);
        console.log(`id: ${this.book.id} typeof id: ${typeof this.book.id}- anterior: ${this.anterior} - siguiente: ${this.siguiente}`);
        
      },
      e=>console.log("error al traer el libro desde el servicio: ",e)
      );
      */
  }

  editBook(){
    console.log("editBook");
    this.router.navigate(["/bookForm/"+this.book.id]);
  }

  removeBook(){
    console.log("removeBook");
    let userConfirm = window.confirm("Confirm delete this book?");
    if(userConfirm){
    this.bookService.deleteBook(this.book).subscribe(
      response=>this.router.navigate(["/books"]),
      error => this.myHandleError(error)
    );}
    
  }

  goBack(){
    console.log("goBack");
    this.router.navigate(["/books"]);
  }

  myHandleError(e){
    console.log("myHnadleError");
    return throwError(`An error has ocurred: ${e}`);
  }
}

    /*
    activatedRoute.params.subscribe(// <-- Como navegar al mismo componente que ya estas pero con un parametro distinto en la url (para implementar el Prev y Next)
      param => bookService.getBook(param['id']).subscribe(
        response => {
          this.book = response as Book;
          console.log("libro recibido: ", response as Book);
          console.log("id+150:",this.book.id+150);
        },
        error => this.myHandleError(error)
      ),
    );
    */
  

  /*
  testUnLibroyOtroLibro(){
    console.log(`un libro id+1: ${this.unLibro.id+1} id-1: ${this.unLibro.id-1}`);
    console.log(`otro libro id+1: ${this.otroLibro.id+1} id-1: ${this.otroLibro.id-1}`);
    console.log(this.unLibro);

  }
  test1(b){
    console.log("ahora este test1");
  }
  test2(b:Book){
    console.log("porque se ejecuta test1?")
    console.log("id+1:: ",b.id+1);
    console.log("id-1::-: ",b.id-1);
  }



  ngOnInit(): void {
    console.log("onInit")
  }
*/


 


