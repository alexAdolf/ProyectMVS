import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {
  public title: string
  public articles: Article[];

  constructor(
    private _articleService: ArticleService
  ) {
    this.title = 'Últimos articulos'


   }

   ngOnInit() { debugger;
    this._articleService.getArticles(true).subscribe(
      response =>{ debugger;
        if(response.status == 'success'){
          this.articles = response.article;
          console.log(this.articles);
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
