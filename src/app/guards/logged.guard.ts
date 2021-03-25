import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router'; //informacion de rutas de angular
import { error } from 'protractor';
import { Observable } from 'rxjs';
import { FirebaseService } from '../service/firebase.service';

@Injectable({ // opcion de donde queremos colocar el guard
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  private logged: boolean;

  constructor(
    private firebaseS: FirebaseService, 
    private router: Router,
  ){}
  canActivate(
    next: ActivatedRouteSnapshot, //esta haciendo que ruta esta activa
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.firebaseS.currentUser().then(resp=>{
        if(resp.uid != null){
          console.log('guard pass!!');
          this.logged = true;
        } else {
          this.logged = false;
          window.alert('Ruta protegida');
          this.router.navigate(['/login']);
        }
       
      }).catch(error=>{
        console.log('error guard canActivate-->', error);
        this.logged = false;
        window.alert('Ruta protegida');
        // return this.logged;
      })
      return this.logged; //aca afuera va el return
    
  }
  
}

