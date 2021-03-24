import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleComponent } from './components/article/article.component';
import { BlogComponent } from './components/blog/blog.component';
import { ErrorComponent } from './components/error/error.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MycomponentComponent } from './components/mycomponent/mycomponent.component';
import { SearchComponent } from './components/search/search.component';
import { TestComponent } from './components/test/test.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path: 'inicio', component:MycomponentComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'blog/article/:id', component:ArticleComponent},
  {path: 'blog/crear', component:ArticleNewComponent},

  {path: 'buscar/:search', component:SearchComponent},
  {path: 'formulario', component:FormularioComponent},
  {path: 'peliculas', component:MoviesComponent},
  {path: 'test', component:TestComponent},
  {path: 'test/:name/:lastName', component:TestComponent},// parametros por URL,
  {path: '**', component:ErrorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
