import { Injectable } from '@angular/core';
import {BaseApiServiceService} from './base-api-service.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../_model/user';
import { Observable } from 'rxjs';
import {ok} from 'assert';

@Injectable()
export class AuthService extends BaseApiServiceService {

  constructor(private http: HttpClient) {
    super();
  }

  login(username: string, password: string): Observable<boolean> {
    let sessionuser: User = null;
    const auth = new Observable<boolean>(
      (observer) => {
        const url = this.buildRemoteRestUrl('security/login');
        this.http.post(url, {username, password}).subscribe(
            res => {
              if (res[0] = 200){
                sessionuser = (<User>res[0]);
                console.log('loggato');
                // Salvataggio dell'utente loggato
                this.storeSessionUser(sessionuser);

                // Sblocco dell'observable con OK
                observer.next(true);
                observer.complete();
              } else {
                console.log('non loggato');
                // Sblocco dell'observable con KO
                observer.next(false);
                observer.complete();
              }
            }
        );
      }
    );
    return auth;
  }

  /**
   * Salva i dati dell'utente loggato nel localStorage
   * @param {User} loggedOne
   */
  private storeSessionUser(loggedOne: User) {
    localStorage.setItem('currentUser', JSON.stringify(loggedOne));
  }

  /**
   * Recupera i dati dell'utente loggato dal localStorage
   * @returns {User}
   */
  public getLoggedUserFromSessionStorage(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  isLoggedUser(): boolean {
    const user: User = this.getLoggedUserFromSessionStorage();
    if (user && user.token) {
      return true;
    }
    return false;
  }
  /**
   * Effettua il logout rimuovendo l'utente loggato dal
   * localStorage
   */
  logout() {
    localStorage.removeItem('currentUser');
  }
}
