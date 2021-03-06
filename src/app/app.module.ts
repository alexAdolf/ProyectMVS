import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { Moment } from 'moment';
import { AngularFileUploaderModule } from "angular-file-uploader";




import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ContentComponent } from './components/content/content.component';
import { MycomponentComponent } from './components/mycomponent/mycomponent.component';
import { SliderComponent } from './components/slider/slider.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ErrorComponent } from './components/error/error.component';
import { TestComponent } from './components/test/test.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { EsParPipe } from './pipes/espar.pipe';
import { ArticlesComponent } from './components/articles/articles.component';
import { MomentModule } from 'angular2-moment';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';

import { CharactersModule } from './characters/characters.module';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { AuthenticationComponent} from './components/authentication/authentication.component';

import { AngularFireModule } from '@angular/fire';
import{ AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    ContentComponent,
    MycomponentComponent,
    SliderComponent,
    SiderbarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    ErrorComponent,
    TestComponent,
    PeliculaComponent,
    EsParPipe,
    ArticlesComponent,
    ArticleComponent,
    SearchComponent,
    ArticleNewComponent,
    PopUpComponent,
    AuthenticationComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    CharactersModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   MomentModule,
   AngularFileUploaderModule,
   AngularFireAuthModule,
   AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFirestoreModule,
   ReactiveFormsModule ,
   

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
