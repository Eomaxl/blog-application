import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  //empty object
  public currentBlog;

  //Declare a dummy blog variable here
  public allBlogs = [
    {
      "blogId":"1",
      "lastModified":"2018-01-10",
      "created":"2017-12-09",
      "tags":[],
      "author":"Admin",
      "category":"Comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 1 description",
      "title":"This is blog 1"
    },
    {
      "blogId":"1",
      "lastModified":"2018-01-10",
      "created":"2017-12-09",
      "tags":[],
      "author":"Admin",
      "category":"Comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 1 description",
      "title":"This is blog 1"
    },
    {
      "blogId":"1",
      "lastModified":"2018-01-10",
      "created":"2017-12-09",
      "tags":[],
      "author":"Admin",
      "category":"Comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 1 description",
      "title":"This is blog 1"
    }
  ]


  constructor(private _route: ActivatedRoute, private router:Router) {
    console.log("constructor is called");
   }


  ngOnInit() {
    console.log("ngOnInit() is called");
    //getting the blog id from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);

    this.getSingleBlogInformation(myBlogId);
  }

  public getSingleBlogInformation(currentBlogId):any {

    for(let blog of this.allBlogs)
    {
      if(blog.blogId == currentBlogId)
      {
        this.currentBlog = blog;
      }
    }

    console.log(this.currentBlog);
  }

}
