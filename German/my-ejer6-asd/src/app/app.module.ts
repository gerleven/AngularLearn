import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import  {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [AppComponent, BooksComponent, BookDetailComponent, BookFormComponent],
  imports: [BrowserModule,FormsModule, routing,HttpClientModule, BrowserAnimationsModule,MatSliderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
