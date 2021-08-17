import {Component, Input} from '@angular/core';

@Component({
        selector: 'miHeader',
        templateUrl: './header.component.html'
    })
export class HeaderComponent {
    @Input()//con este decorador le indicamos que "tomaEsta" no es una variable propia de este archivo si no que viene del padre
    atributoDelHijo: string;//<-- ya tenemos la variable y la podemos usar en el tamplate html con {{}}
    @Input()
    otroAtributoDelHijo: string;
}