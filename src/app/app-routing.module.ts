import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { ErrorComponent } from './components/error/error.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MycomponentComponent } from './components/mycomponent/mycomponent.component';
import { TestComponent } from './components/test/test.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path: 'inicio', component:MycomponentComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'formulario', component:FormularioComponent},
  {path: 'peliculas', component:MoviesComponent},
  {path: 'test', component:TestComponent},
  {path: 'test/:name/:lastName', component:TestComponent},// parametros por URL
  {path: '**', component:ErrorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
