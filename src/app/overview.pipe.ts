import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overview'
})
export class OverviewPipe implements PipeTransform {

  transform(over:string): unknown {
    return "Overview: "+ over.split(" ").slice(0,10).join(" ")+" ....See More";
  }
}
