import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'MyLowercase'
})
export class LowercasePipe implements PipeTransform {
  transform(value: string | null): string | null{
    if(value){
        return value.toLowerCase();
    } else return null;
  }
}