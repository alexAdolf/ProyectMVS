import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../service/rick-and-morty.service';
import { StarWarsService } from '../../service/star-wars.service'


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public allCharacters: any[] = [];

  constructor(
    private StarService: StarWarsService
  ) { 
    this.allCharacters = StarService.getAllCharacters();
  }

  ngOnInit() {
    console.log(this.allCharacters);
  }


}
