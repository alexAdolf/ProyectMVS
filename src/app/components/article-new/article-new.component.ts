import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../service/article.service';
import {Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../service/global'


@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService],
})
export class ArticleNewComponent implements OnInit {
  public article: Article;
  public status: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, gif, jpeg",
    maxSize: "50",
    uploadAPI:  {
      url:Global.url+'upload-image',
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts:{
      attachPinBtn: 'sube la imagen'
    }
    
};

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService

  ) { 
    this.article = new Article( '', '', '', null, null);
  }

  ngOnInit() {
  }

  onSubmit(){
    this._articleService.create(this.article).subscribe(
      response =>{ 
        if(response.status == 'success'){
          this.status = 'success';
          this.article = response.articles;
          this._router.navigate(['/blog']);

        } else{
          this.status = 'error';
        }
      }, 
      
      error =>{
        console.log(error);
        this.status = 'error'
      }
    )
    // console.log(this.article)
  }

  imageUpload(data){ debugger;
    let image_data =JSON.parse(data.response);
    this.article.image = image_data.image; 
  }

  imageUpload2(data){ debugger;
    const reader = new FileReader();
        reader.readAsDataURL(data[0]);
        reader.onload = () => { this.article.image = <string> reader.result }
      // data = <string> reader.result;
    // JSON.parse(data.response);
     
  }

}
