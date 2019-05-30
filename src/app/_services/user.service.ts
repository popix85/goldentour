import {User} from '../_model/user';
import {BaseApiServiceService} from './base-api-service.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService extends BaseApiServiceService {

  users: User[];

  constructor(private http: HttpClient) {
    super();
  }

  /**
   * Restituisce l'elenco degli utenti.
   */
  getUsers() {
    const url = this.buildRemoteRestUrl('users');
    return this.http.get(url);
  }

  /**
   * Eliminazione dell'utente selezionato.
   * @param {User} user
   */
  deleteUser(user: User) {
    const index = this.users.indexOf(user);
    if ( index >= 0) {

      this.users.splice(index,  1 );
    }
  }

  /**
   * Update dello user selezionato
   * @param {User} user

  updateUser(user: User) {
    const idx = this.users.findIndex((v) => v.id === user.id);
    if ( idx !== -1) {
      this.users[idx] = user;
    }
  }*/

  updateUser(user: User) {
    const url = this.buildRemoteRestUrl('security/user/update/' + user.id);
    return this.http.put(url, user);
  }

  createUser(user: User) {
    const url = this.buildRemoteRestUrl('security/to/newUser');
    return this.http.post(url, user);
  }

  getUserById(id: number) {
    const url = this.buildRemoteRestUrl('security/user/' + id);
    return this.http.get(url);
  }

  getUserByName(name: string, lastname: string) {
    const url = this.buildRemoteRestUrl('security/to/user/' + name + '/' + lastname);
    return this.http.get(url);
  }

  /**getUserById(id: number): User {
    let selected: User = null;
    this.users.forEach(
      user => {
        if (user.id === id) {
          selected =  user;
        }
      }
    );
    return selected;
  }*/
}
