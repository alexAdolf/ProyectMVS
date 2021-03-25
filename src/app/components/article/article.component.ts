import { Component, OnInit } from '@angular/core';
import { ArticleService} from '../../service/article.service';
import { Article } from '../../models/article';
import {Router, ActivatedRoute, Params} from '@angular/router';
import  {Global } from '../../service/global';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article: Article;
  public url: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.url = Global.url;
  }

  ngOnInit() { 
    this._route.params.subscribe(params =>{
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        response =>{ debugger;
          if(response.status == 'success'){
            this.article = response.article;
          }else{ 
            this._router.navigate(['/home']);
          }
        },
        error =>{
           console.log(error);
          this._router.navigate(['/home']);
        }
      );
    });
  }

}
