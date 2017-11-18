import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from './post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log("Id: ",id);
    this.postService.getAllPosts(id)
      .subscribe(posts => {
        console.log(posts);
        this.posts = posts;
      })
  }

}
