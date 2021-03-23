import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula;
  @Output() MarcarFavorito = new EventEmitter
  constructor() { }

  ngOnInit() {
  }

  seleccionar(event, pelicula) {
    this.MarcarFavorito.emit({
      pelicula: pelicula
    })
  }
}
