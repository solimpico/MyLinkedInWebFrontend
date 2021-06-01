import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../model/user';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(users: User[], searchInput: string): any[] {
    if (!searchInput) {
      return  [];
    }
    searchInput = searchInput.toLowerCase();
    return users.filter(
      x => x.name.toLowerCase().includes(searchInput)
    );
  }

}
