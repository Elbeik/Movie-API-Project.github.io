import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxWord'
})
export class MaxWordPipe implements PipeTransform {

  transform(over:string): unknown {
    return "Overview: "+ over.split(" ").slice(0,20).join(" ");
  }

}
