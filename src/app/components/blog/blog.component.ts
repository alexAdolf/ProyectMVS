import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../service/article.service';
import { Article } from '../../models/article';
import  {Global } from '../../service/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  public articles: Article[];
  public url: string;


  constructor(
    private _articleService: ArticleService
  ) { 
    this.url = Global.url;
  }

  ngOnInit() { debugger;
    this._articleService.getArticles().subscribe(
      response =>{ debugger;
        if(response.status == 'success'){
          this.articles = response.article;
        } else{
          
        }
        // console.log(response);
      },
      error =>{
        console.log(error);
      }
    );
      
  }


}
