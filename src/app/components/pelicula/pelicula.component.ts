import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilmsModule } from '../../films/films.module';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula: FilmsModule ;
  @Output() MarcarFavorito = new EventEmitter
  constructor() { }

  ngOnInit() {
  }

  seleccionar(event, pelicula){
    this.MarcarFavorito.emit({
      pelicula: pelicula
    })
  }
}
