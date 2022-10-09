import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies:any , word:any ): any {

    return movies.filter( function(movie:any){

      return movie.title.toLowerCase().includes(word.toLowerCase());
    })
  }

}
