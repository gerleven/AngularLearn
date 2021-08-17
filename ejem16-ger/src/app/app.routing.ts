import { RouterModule } from '@angular/router';

//Aca estamos importando los 2 componentes book-detail.component.ts y book-list.component.ts:
import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';

const appRoutes = [
  { path: 'book/:id', component: BookDetailComponent,  },/*por lo que entendi hasta ahora aca va a machear toda url que tenga
  el formato 'book/<algo>' guardando ese algo en el parametro id que despues vamos a rescatar usando el activatedRoute.snapshot.params['id'];*/
  { path: 'books', component: BookListComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'ger', redirectTo: 'book/11', pathMatch: 'full' }, //Si pongo la url http://localhost:4200/ger me redirige a 'book/11' osea 'book/:id' siendo id=11 osea http://localhost:4200/book/11
  { path: 'joa', redirectTo: 'book/12' } //Para que sirve el pathMatch??
]

export const routing = RouterModule.forRoot(appRoutes);
