import { Component, OnInit } from '@angular/core';
import {Post} from '../../model/post';
import {Comment} from '../../model/comment';
import {PostService} from '../../services/post.service';
import {User} from '../../model/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService, private route: Router) { }

  ngOnInit(): void {
    console.log(sessionStorage.getItem('token'));
    this.postService.getAllPost().subscribe(posts => {
      this.posts = posts;
    });
    if (sessionStorage.getItem('reload') === '1') {
      sessionStorage.setItem('reload', '0');
      setTimeout(() => {
        location.reload(true);
      }, 100);
    }
  }

  showOrNotComment(item: Post): void{
    item.showComments = !item.showComments;
  }
  showHidenPost(item: Post): void{
    this.postService.showHidenPost(item).subscribe(post => {
      item.visible = post.visible;
    });
  }
  moreDetails(userId: number): void{
    // tslint:disable-next-line:radix
    const idUser = parseInt(sessionStorage.getItem('idUser') || '0');
    if (userId === idUser && idUser !== 0){
      this.route.navigateByUrl('profile');
    } else {
      this.route.navigateByUrl('userdetails/' + userId);
    }

  }
}
