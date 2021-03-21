import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { FilmsModule } from '../../films/films.module';
import { PeliculaService } from '../../service/pelicula.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [PeliculaService]

})
export class MoviesComponent implements OnInit {

  public title: string
  public peliculas: FilmsModule[];
  public favorita: FilmsModule;
  public fecha : any;
  
  constructor(
    private _peliculaService: PeliculaService
  ){
    this.title = "Componente Peliculas";
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2020, 8, 12);
   }

  ngOnInit() {
    console.log(this.peliculas);
    console.log("Componente lanzado")
    console.log(this._peliculaService.hola());
  }

  ngDoCheck(){
    console.log("DoCheck lanzado")
  }

  ChangeTitle(){
    this.title = "El titulo se ha cambiado"
  }

  ngOnDestroy(){
    console.log("Eliminar")
  }

  mostrarFavorita(event){
  this.favorita = event.pelicula
  }
}

