import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../common/Login';
import { User } from '../common/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.apiURL + '/api/users';
  urlAuthentication = environment.apiURL + '/api';
  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(this.url);
  }

  get(id: number) {
    return this.httpClient.get(this.url + '/' + id);
  }

  post(user: User) {
    return this.httpClient.post(this.url, user);
  }

  put(id: number, user: User) {
    return this.httpClient.put(this.url + '/' + id, user);
  }

  delete(id: number) {
    return this.httpClient.delete(this.url + '/' + id);
  }

  login(login: Login) {
    return this.httpClient.post(this.urlAuthentication+'/login/admin', login);
  }
}
