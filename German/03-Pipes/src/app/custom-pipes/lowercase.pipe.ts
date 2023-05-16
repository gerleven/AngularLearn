import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'MyLowercase'
})
export class LowercasePipe implements PipeTransform {
  transform(value: string | null, ...args: any): string | null{
//transform(value: string | null, arg1: any, arg2: any): string | null{
    
    if(!value) return null
    let result = value.toLowerCase();

    if(args.includes('firstMayus')){
      result = result.charAt(0).toUpperCase() + result.slice(1);
    }

    return result;
    
  }
}

// export class LowercasePipe implements PipeTransform {
//   transform(value: string | null, arg1: any, arg2: any): string | null{
    
//     if(!value) return null
//     let result = value.toLowerCase();

//     if(arg1.includes('firstMayus')){
//       result = result.charAt(0).toUpperCase() + result.slice(1);
//     }

//     return result;
    
//   }
// }