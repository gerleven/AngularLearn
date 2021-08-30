import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import {Book} from '../Book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-form',
  template: `
  <p>book-form works!</p>
  <h2>Book "{{book.title}}"</h2>
  <h4 *ngIf="book.id">id: {{book.id}}</h4>
  <span>Title: </span><input type="text" [(ngModel)]="book.title" placeholder="Title">
  <br>
  <span>Description: </span> <input type="text" [(ngModel)]="book.description" placeholder="Description">
  <br>
  <button (click)="saveBook(book);">Save</button>
  <button (click)="cancelBook();">Cancel</button>
  `,
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  book:Book;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private bookService: BookService) {
    let id = activatedRoute.snapshot.params['id'];
    if(id){
      //Viene desde el EditBook
      bookService.getBook(id).subscribe(
        book => this.book=book,
        error => this.myHandleError(error)
      );
    }
    else{
      //Esta creando un libro nuevo
      this.book = {title:"",description:""}
    }
  }
  
  ngOnInit(): void {
  }

  saveBook(book){
    console.log("book.id: ",book.id)
    if(book.id){
      console.log("book.id: ",book.id)
      this.bookService.editBook(book.id, book).subscribe(
        ()=>{
          console.log("adentro");
          this.router.navigate(['/bookDetail/'+book.id])
        },
        error=>{
          console.log("error adentro");

          this.myHandleError(error)
        }
      )
    }
    else{
    console.log("book.id: ",book.id)

      this.bookService.saveBook(book).subscribe(
        ()=>this.router.navigate(['/books']),
        error=>this.myHandleError(error)
      );
    }
  }
  cancelBook(){
    this.router.navigate(['/books']);
    //window.history.back();// tambien podemos usar esto
  }

  myHandleError(error){
    console.log("An error had ocurred: ",error)
  }

}
