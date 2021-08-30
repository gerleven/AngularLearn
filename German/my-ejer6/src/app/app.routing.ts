import { RouterModule } from "@angular/router";

import { BooksComponent } from './books/books.component';
import { BookFormComponent } from "./book-form/book-form.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";

const appRoutes = [
    {path: 'books', component: BooksComponent},
    {path: 'bookDetail/:id', component: BookDetailComponent},
    {path: 'bookForm/:id', component: BookFormComponent},
    {path: 'newBook', component: BookFormComponent},
    {path: '', redirectTo: 'books', pathMatch: 'full'}
]

export const routing  = RouterModule.forRoot(appRoutes);