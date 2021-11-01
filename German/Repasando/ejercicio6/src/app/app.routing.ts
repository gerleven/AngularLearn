import { RouterModule } from '@angular/router';

// Importar componentes a mostrar en el <router-outlet>
///Ej:
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFormComponent } from './book-form/book-form.component';

//array appRoutes con los {path: , component: }
const appRoutes = [
  { path: 'books', component: BookListComponent },
  { path: 'bookDetail/:id', component: BookDetailComponent },
  { path: 'bookForm/:id', component: BookFormComponent },
  { path: 'newBook', component: BookFormComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' },
];

export const miRouting = RouterModule.forRoot(appRoutes);
