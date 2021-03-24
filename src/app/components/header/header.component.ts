import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public logout: any

  constructor(
    private firebaseS: FirebaseService
  ) { }

  ngOnInit() {
  }

  toLogout(){
    this.firebaseS.logout().then( resp => {
      console.log('logout exitoso -->', resp)
    }).catch(error => {
      console.log('error logout -->', error)
    })
  }

}
