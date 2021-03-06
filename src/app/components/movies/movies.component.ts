import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public title: string
  public peliculas: Array<any>;

  constructor() {
    this.title = "Componente Peliculas";
    this.peliculas = [
      { title: "Spiderman", image: 'https://dam.smashmexico.com.mx/wp-content/uploads/2019/06/spider-man-far-from-home-fin-mcu-fase-3-razon-kevin-feige-cover.jpg', },
      { title: "Avengers", image: 'https://cnet1.cbsistatic.com/img/l-xJp5JmvfZUGTVlfJ7O-wVVRTI=/940x0/2019/03/14/70b49c1d-0d3b-4b75-9225-b898b83cdc9a/avengers-endgame-poster-og-social-crop.jpg', },
      { title: "Batman", image: 'https://media.gq.com.mx/photos/5f8336a73515c53dd2a8653c/master/pass/the-batman-robert-pattinson-matt-reeves.jpg', }
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
}

