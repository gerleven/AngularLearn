import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { miRouting } from './app.routing';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    BookFormComponent,
  ],
  imports: [BrowserModule, miRouting],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
