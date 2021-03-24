import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../service/star-wars.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-character-single',
  templateUrl: './character-single.component.html',
  styleUrls: ['./character-single.component.css']
})
export class CharacterSingleComponent implements OnInit {
  public character: any; 
  constructor(
    private StarService: StarWarsService,
    private activatedRoute:  ActivatedRoute
  ) {
    activatedRoute.params.subscribe(params => {
      console.log('params -->', params);
      this.character = StarService.getCharacterById(params.id);

    })
   }

  ngOnInit() {
  }

}