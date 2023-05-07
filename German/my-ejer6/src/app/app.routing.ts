import { RouterModule } from "@angular/router";

// Importar componentes a mostrar en el <router-outlet>
///Ej:
import { BooksComponent } from './books/books.component';
import { BookFormComponent } from "./book-form/book-form.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";

//array appRoutes con los {path: , component: }
const appRoutes = [
    {path: 'books', component: BooksComponent},
    {path: 'bookDetail/:id', component: BookDetailComponent},
    {path: 'bookForm/:id', component: BookFormComponent},
    {path: 'newBook', component: BookFormComponent},
    {path: '', redirectTo: 'books', pathMatch: 'full'}
]

export const routing  = RouterModule.forRoot(appRoutes);