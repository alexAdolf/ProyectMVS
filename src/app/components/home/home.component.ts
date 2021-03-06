import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from '../../service/article.service';
import { FirebaseService } from '../../service/firebase.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  

  public title: string
  public articles: Article[];
  public uid: string;
  constructor(
    private firebaseS: FirebaseService,

    private _articleService: ArticleService
  ) {
    this.firebaseS.currentUser().then(async resp => {
      console.log('usuario actual -->', resp);
      this.uid = resp.uid;
    }).catch(error => {
      console.log('error calbackhell -->', error);
    })
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
        console.log('localstorage email -->', localStorage.getItem('email'));

        // console.log(response);
      },
      error =>{
        console.log(error);
      }
    );

   
  }

  

}
