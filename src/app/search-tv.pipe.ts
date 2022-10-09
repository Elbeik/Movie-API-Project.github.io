import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTv'
})
export class SearchTvPipe implements PipeTransform {

  transform(tv:any [], tvWord:string): any {
    return tv.filter( t=> t.name.toLowerCase().includes(tvWord.toLowerCase()));
  }

}
