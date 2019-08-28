import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //declare a dummy blog variable here
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


  constructor() { }

  ngOnInit() {
  }

}
