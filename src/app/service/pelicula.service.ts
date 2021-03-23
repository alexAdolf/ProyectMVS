import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula("Spiderman", 2019, "https://dam.smashmexico.com.mx/wp-content/uploads/2019/06/spider-man-far-from-home-fin-mcu-fase-3-razon-kevin-feige-cover.jpg"),
            new Pelicula("Avenger", 2020, "https://cnet1.cbsistatic.com/img/l-xJp5JmvfZUGTVlfJ7O-wVVRTI=/940x0/2019/03/14/70b49c1d-0d3b-4b75-9225-b898b83cdc9a/avengers-endgame-poster-og-social-crop.jpg"),
            new Pelicula("Batman", 2021, "https://media.gq.com.mx/photos/5f8336a73515c53dd2a8653c/master/pass/the-batman-robert-pattinson-matt-reeves.jpg"),
        ];
    }
hola(){
        return 'hola a todos desde servicio';
    }

getPeliculas(){
    return this.peliculas;
}
}



