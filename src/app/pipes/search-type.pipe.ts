import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../model/user';
import {PostType} from '../model/post-type';

@Pipe({
  name: 'searchType'
})
export class SearchTypePipe implements PipeTransform {

  transform(users: PostType[], input: string): any[] {
    if (!input) {
      return  [];
    }
    input = input.toLowerCase();
    return users.filter(
      x => x.type.toLowerCase().includes(input)
    );
  }

}
