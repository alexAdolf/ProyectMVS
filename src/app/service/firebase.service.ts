import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  async login(email: string, pass: string){
    try{
      const respAuth = await this.angularFireAuth.auth.signInWithEmailAndPassword(email, pass);
      console.log('respuesta Auth-->', respAuth);
      localStorage.setItem(
        'email', respAuth.user.email
      )
      return respAuth
    }catch(error){
      console.log('error auth -->', error);

    }
  }

  async logout(){
    try{ // deslogeo
      const logoutResp = await this.angularFireAuth.auth.signOut();
      console.log('logout exitoso');
      localStorage.clear();
      return logoutResp;
    } catch(error){
      console.error('logout error -->', error);
      return error;
  
    }
  }

  async registerUser(email: string, pass: string){
    try {
      const respRegister = await 
      this.angularFireAuth.auth.createUserWithEmailAndPassword(email, pass);
      console.log('resp respRegisterUser -->', respRegister);
      return respRegister.user
  
    } catch (error) {
      
    }
  
  }
  
  async currentUser(){
    try {
      const currentUserResp = this.angularFireAuth.auth.currentUser;
      return currentUserResp;
    } catch (error) {
      console.log('error current user -->', error);
    }
  }
}
