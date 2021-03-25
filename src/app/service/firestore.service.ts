import { Injectable } from '@angular/core';
import { AngularFirestore }  from '@angular/fire/firestore';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs'; //interraccion a un servicio

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  public userBd: any;

  constructor(
    private fireStore: AngularFirestore
  ) { }

  async createUser(newUser: User): Promise<string> {
    try {
      const respnewUser = await this.fireStore.collection('users').add(newUser);
      console.log(' responde creaUteUser -->', respnewUser);
      return respnewUser.id;
    } catch (error) {
      console.log('error createUser -->', error);
    }
  }

  getUser(uid: string): Observable<User> {
    return new Observable(observer => { 
      this.fireStore.firestore.collection('users').where('uid', '==', uid).get().then(querySnapshot => {
        querySnapshot.forEach(resp => {
          this.userBd = resp.data();
        })
        observer.next(this.userBd);
        observer.complete();
      }).catch(error => {
        console.log('error call service firestore -->', error);
        observer.error(error);
        observer.complete();
      })
    });
  }

}
