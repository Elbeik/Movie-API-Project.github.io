import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate'
})
export class RatePipe implements PipeTransform {

  transform(rate:string): unknown {
    return rate.slice(0,3);
  }

}
