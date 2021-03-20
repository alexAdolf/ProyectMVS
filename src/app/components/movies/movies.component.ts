import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { FilmsModule } from '../../films/films.module';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public title: string
  public peliculas: FilmsModule[];
  public favorita: FilmsModule;

  constructor() {
    this.title = "Componente Peliculas";
    this.peliculas = [
      new FilmsModule("Spiderman", 2019, "https://dam.smashmexico.com.mx/wp-content/uploads/2019/06/spider-man-far-from-home-fin-mcu-fase-3-razon-kevin-feige-cover.jpg"),
      new FilmsModule("Avenger", 2020, "https://cnet1.cbsistatic.com/img/l-xJp5JmvfZUGTVlfJ7O-wVVRTI=/940x0/2019/03/14/70b49c1d-0d3b-4b75-9225-b898b83cdc9a/avengers-endgame-poster-og-social-crop.jpg"),
      new FilmsModule("Batman", 2021, "https://media.gq.com.mx/photos/5f8336a73515c53dd2a8653c/master/pass/the-batman-robert-pattinson-matt-reeves.jpg"),
      // { year: 2019, title: "Spiderman", image: 'https://dam.smashmexico.com.mx/wp-content/uploads/2019/06/spider-man-far-from-home-fin-mcu-fase-3-razon-kevin-feige-cover.jpg', },
      // { year: 2020, title: "Avengers", image: 'https://cnet1.cbsistatic.com/img/l-xJp5JmvfZUGTVlfJ7O-wVVRTI=/940x0/2019/03/14/70b49c1d-0d3b-4b75-9225-b898b83cdc9a/avengers-endgame-poster-og-social-crop.jpg', },
      // { year: 2021, title: "Batman", image: 'https://media.gq.com.mx/photos/5f8336a73515c53dd2a8653c/master/pass/the-batman-robert-pattinson-matt-reeves.jpg', }
    ]
   }

  ngOnInit() {
    console.log(this.peliculas);
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

  mostrarFavorita(event){
  this.favorita = event.pelicula
  }
}

