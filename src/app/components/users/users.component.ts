import { Component, EventEmitter, Output } from '@angular/core';
import { Users } from '../../models/users';
import { GetUsersService } from '../../services/get-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users: Users[] = [];
  @Output() isActive = new EventEmitter<number>();
  constructor(private getUsersService: GetUsersService) {}

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData(): void {
    this.getUsersService.getUsers().subscribe((users: Users[]) => {
      this.users = users;
    });
  }

  isUserActive(): void {
    this.users.forEach((user) => (user.isActive = false));
  }
}
