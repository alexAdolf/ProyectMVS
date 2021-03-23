import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderbarComponent implements OnInit {

  public searchString: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
  }

  goSearch(){
    this._router.navigate(['/buscar', this.searchString]);
    // alert(this.searchString);
  }

}
