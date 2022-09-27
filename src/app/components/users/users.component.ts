import { Component } from '@angular/core';
import { Users } from '../../models/users';
import { GetUsersService } from '../../services/get-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users: Users[] = [];
  constructor(private getUsersService: GetUsersService) {}

  ngOnInit() {
    this.getUsersData();
  }

  getUsersData() {
    this.getUsersService.getUsers().subscribe((users: Users[]) => {
      this.users = users;
    });
  }
}
