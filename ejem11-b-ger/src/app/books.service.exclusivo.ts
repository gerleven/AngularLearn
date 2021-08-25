import { Injectable } from '@angular/core';

@Injectable()// <-- No es un singleton sirviendo a todos desde el root, quien lo quiera lo tendra que poner en su "providers:"
export class BooksServiceExclusivo {

  getTitles(title: string) {
    return [
      'Aprende Java en 2 días',
      'Java para torpes',
      'Java para expertoss'
    ];
  }
}
