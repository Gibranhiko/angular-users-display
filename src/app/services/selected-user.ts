import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class SelectedUserService {
  constructor() {}
  private selectedUserObservable: BehaviorSubject<Users> =
    new BehaviorSubject<Users>({
      id: 0,
      name: '',
      date: new Date(0),
      description: '',
      status: false,
    });

  get selectedUser(): Observable<Users> {
    return this.selectedUserObservable.asObservable();
  }

  set selectedUserUpdate(data: Users) {
    this.selectedUserObservable.next(data);
  }
}
