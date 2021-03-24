import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../service/star-wars.service'
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  
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
