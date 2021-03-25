import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { FirebaseService } from '../../service/firebase.service';
import { FirestoreService} from '../../service/firestore.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public profiles: any[] = ['basic', 'medium', 'advanced'];

  get email() { return this.registerForm.get('email') }; // vincular y transformar en una funcion y usarlo
  get pass() { return this.registerForm.get('pass') };
  get phones() { return this.registerForm.get('phones') as FormArray};

  public registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
    name: new FormControl(''),
    profile: new FormControl(''),
    phones: new FormArray([]), //formulario pequeño en un form lo que va hacer mediante un boton agregando un formualrio chiquito
    newsletter: new FormControl(false),

  })


  constructor(
    private firebaseService: FirebaseService,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
  }

  addPhone(){
    const phoneGroup = new FormGroup({
      phone: new FormControl(''),
      description: new FormControl('')
    })
    this.phones.push(phoneGroup);
  }
  
  removePhone(index: number){
    this.phones.removeAt(index) //elimina el n° del index que estamos pasando
  }

  //funcion para enviar
  onRegister() {
    //primero va a registrar el usuario en el firebase, despues va a tomar la respuesta y construira el arreglo que va a tener los datos de BD 
    console.log('registerForm -->', this.registerForm.value);
    this.firebaseService.registerUser(this.registerForm.value.email, 
    this.registerForm.value.pass).then(resp => {
      console.log('ok register authenticate firebase');
      const newUSer: User = {
        email: resp.email,
        name: this.registerForm.value.name,
        phoneNumber: this.registerForm.value.phones,
        profile: this.registerForm.value.profile,
        newsletter: this.registerForm.value.newsletter,
        uid: resp.uid,

      }

      this.firestoreService.createUser(newUSer).then(resp => {
        console.log('new user register firestore -->', resp);
      }).catch(error => {
        console.log('error register firestore -->', error);
      })

    })
  }

}
