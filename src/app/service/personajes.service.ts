import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Map } from 'rxjs/operator';


@Injectable( {
    providedIn: 'root'
})
export class ComicService{
    PUBLIC_KEY = '';
    HASH= '';
    URL_API ='';
    constructor(
        private http: HttpClient
    ){}

getAllCharacters () : Observable<any>{
    return this.http.get<any>(this.URL_API)
    // .pipe(map((data: any)))
}
}

export interface Personajes {

}