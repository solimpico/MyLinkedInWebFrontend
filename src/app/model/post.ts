import {Comment} from './comment';
import {DataDTOList} from './data-dtolist';

export interface Post {
  id: number;
  datetime: Date;
  visible: boolean;
  userId: number;
  nameAndSurnameUser: string;
  type: string;
  dataDTOList: DataDTOList[];
  commentDTOList: Comment[];
  showComments: boolean;
}
