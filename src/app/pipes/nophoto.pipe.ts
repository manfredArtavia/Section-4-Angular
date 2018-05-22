 import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nophoto'
})
export class NophotoPipe implements PipeTransform {

  transform(value: any[], defaulURL = 'assets/img/noimage.png'): any {
    console.log(value)
    if(value) {
      const [,url,] = value;
      return  value.length ?
      value[1].url :
      defaulURL;
    } return '';
  }

}
