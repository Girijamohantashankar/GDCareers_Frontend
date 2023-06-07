import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:true
})
export class FilterPipe implements PipeTransform {

  transform(value: any):any {
    console.log('pipe');
   return value;
  }

}
