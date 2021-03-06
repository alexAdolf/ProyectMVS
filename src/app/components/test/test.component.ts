import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name: string;
  public lastName: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.name = params.name;
      this.lastName = params.lastName; 
    })
  }

  redireccion(){
    //this._router.navigate(['/formulario']);
    this._router.navigate(['/test', 'adolfo', 'astorga']);
  }

}
