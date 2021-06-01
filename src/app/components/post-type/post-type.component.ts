import {Component, OnInit, ViewChild} from '@angular/core';
import {PostTypeService} from '../../services/post-type.service';
import {PostType} from '../../model/post-type';
import {Post} from '../../model/post';

@Component({
  selector: 'app-post-type',
  templateUrl: './post-type.component.html',
  styleUrls: ['./post-type.component.scss']
})
export class PostTypeComponent implements OnInit {

  @ViewChild('typeForm') form: any;

  allPostType: PostType[] = [];
  newPostType: PostType = {} as PostType;
  newRequiredFields: string[] = [];
  newField = false;
  control = false;
  input = '';

  constructor(private postTypeService: PostTypeService) { }

  ngOnInit(): void {
    this.postTypeService.getAllPostType().subscribe(types => {
      this.allPostType = types;
    });
  }

  deletePostType(item: PostType): void{
    this.postTypeService.deleteType(item).subscribe(() => {
      location.reload(true);
    });
  }

  addType(): void{
    this.allPostType.forEach(type => {
      if (type.type === this.newPostType.type){
        this.control = true;
      }
    });
    if (!this.control) {
      this.newPostType.requiredFields = this.newRequiredFields;
      this.postTypeService.addType(this.newPostType).subscribe(newType => {
        this.allPostType.unshift(newType);
      });
    } else {
      setTimeout(() => {
        location.reload(true);
      }, 1500);
    }
  }

  setNewField(): void{
    if (this.form.value.requiredFields !== []){
      this.newRequiredFields.unshift(this.form.value.requiredFields);
    }

  }

}
