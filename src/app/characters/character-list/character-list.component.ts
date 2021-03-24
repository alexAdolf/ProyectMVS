import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../service/star-wars.service'


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  public allCharacters: any[] = [];

  constructor(
    private StarService: StarWarsService

  ) { 
    this.allCharacters = StarService.getAllCharacters();

  }

  ngOnInit() {
    
  }

}
