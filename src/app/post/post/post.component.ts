import { Component } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  constructor (public showPost: PostService)
  {}
  ngOnInit()
  {
        
  }
}
