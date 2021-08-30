import { RouterModule } from '@angular/router';

//Aca estamos importando los 2 componentes book-detail.component.ts y book-list.component.ts:
import { RellenosComponent } from './rellenos.component';
import { Relleno1Component } from './relleno1.component';
import { Relleno2Component } from './relleno2.component';


const appRoutes = [
//Aca hacemos las vinculaciones entre path y componentes:
  // Luego usaremos un link de este tipo: <a [routerLink]="['/book', book.id]"> para acceder a el.
  { path: 'rellenos', component: RellenosComponent },
  { path: 'relleno1', component: Relleno1Component },
  { path: 'relleno2', component: Relleno2Component },
  { path: 'relleno/:id', component: Relleno1Component },
  { path: '', redirectTo: 'rellenos', pathMatch: 'full' }
]

export const routing = RouterModule.forRoot(appRoutes); // (?) que es esto?