export interface Comment {
  author: string;
  authorId: number;
  comment: string;
  datetime: Date;
  thread: number;
  postId: number;
  commentsOfThread: this[];
}
