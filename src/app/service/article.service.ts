import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { Global } from './global';

@Injectable()
export class ArticleService {
    public url: string

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    pruebas(){
        return "soy el servicio del articulo";
    }

    getArticles(last:any = null):Observable<any>{
        var articles = 'articles';
        if(last != null){
            var articles = 'articles/true';
        }
        return this._http.get(this.url+articles);
    }

    getArticle(articleId):Observable<any>{
        return this._http.get(this.url+'articles/'+articleId);
    }

    search(searchString):Observable<any>{
        return this._http.get(this.url+'search/'+searchString);
    }

    create(article):Observable<any>{
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'aplication/Json');

        return this._http.post(this.url+'save', params, {headers: headers});
    }
}

