import { RouterModule } from '@angular/router';

//Aca estamos importando los 2 componentes book-detail.component.ts y book-list.component.ts:
import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';

const appRoutes = [
  { path: 'book/:id', component: BookDetailComponent,  },
  { path: 'books', component: BookListComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' }
]

export const routing = RouterModule.forRoot(appRoutes);
