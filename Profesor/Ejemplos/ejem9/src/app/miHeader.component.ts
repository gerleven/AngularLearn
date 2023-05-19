import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'miHeader',
    templateUrl: './miHeader.component.html',
    styles: [`.fondo{background-color: #F1F1F1}`]
})
export class HeaderComponent {

    @Output()
    hidden = new EventEmitter<boolean>();

    visible = true;

    click(){
        this.visible = !this.visible;
        this.hidden.emit(this.visible);
    }
}