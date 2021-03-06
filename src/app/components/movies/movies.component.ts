import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public title: string

  constructor() {
    this.title = "Componente Peliculas";
    console.log("Contructor lanzado")
   }

  ngOnInit() {
    console.log("Componente lanzado")
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
}

