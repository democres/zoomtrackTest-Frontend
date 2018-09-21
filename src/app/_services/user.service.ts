import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../rest.service';

@Injectable()
export class UserService {
    constructor(private http: HttpClient, public rest:RestService,) { }
    //
    // getAll() {
    //     return this.http.get<any>(`${this.rest.endpoint}/users`);
    // }
    //
    // getById(id: number) {
    //     return this.http.get(`${this.rest.apiUrl}/users/` + id);
    // }
    //
    // register(user: User) {
    //     return this.http.post(`${this.rest.apiUrl}/users/register`, user);
    // }
    //
    // update(user: User) {
    //     return this.http.put(`${this.rest.apiUrl}/users/` + user.id, user);
    // }
    //
    // delete(id: number) {
    //     return this.http.delete(`${this.rest.apiUrl}/users/` + id);
    // }
}
