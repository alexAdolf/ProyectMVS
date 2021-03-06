import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {
  public title: string;
  public commentary: string;
  public year: number;
  public showMovie: boolean

  constructor() {
    this.title = "Catalogo de peliculas";
    this.commentary = "Comentario";
    this.year = 2021;
    this.showMovie = true
    

    console.log("component movie load");
    console.log(this.title, this.commentary, this.year);
   }

  ngOnInit() {
  }

  hideMovie(){
    this.showMovie = false
  }

}
