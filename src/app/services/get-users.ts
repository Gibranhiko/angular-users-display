import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { users } from '../mock/data';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class GetUsersService {
  constructor() {}

  getUsers(): Observable<Users[]> {
    return of(users);
  }
}
