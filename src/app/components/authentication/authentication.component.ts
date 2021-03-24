import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validator, Validators } from '@angular/forms';
import { FirebaseService } from '../../service/firebase.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  //validacion del login
  get email(){ return this.loginForm.get('email',) };
  get pass(){ return this.loginForm.get('pass') };

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required])
  })

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
  }

  //tomar los datos que vienen del formulario y traerlos al servicio
  onLogin(){
    //va al firebase y va intentar traer datos
    console.log('submit -->', this.loginForm.value);
    this.firebaseService.login(this.loginForm.value.email, this.loginForm.value.pass).then(resp => {
      console.log('response login -->', resp); // imprimo la respuesta
    }).catch (error => {
      console.log('error login -->', error); // si falla muestra el error
    })
  }

}

