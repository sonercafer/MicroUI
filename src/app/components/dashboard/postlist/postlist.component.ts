import { Component, OnInit } from '@angular/core';
import { PostViewModel } from 'src/app/models/post-view-model';
import { PostListService } from 'src/app/services/post-list-service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  public posts: PostViewModel[]
  constructor(private service: PostListService) { }

  ngOnInit(): void {
    this.service.getPostList().subscribe((result:any) => {
      debugger
      this.posts = result.data
    });
  }
}
