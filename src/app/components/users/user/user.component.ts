import { Component, Input } from '@angular/core';
import { Users } from '../../../models/users';
import { SelectedUserService } from '../../../services/selected-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() users: Users;
  isActive: boolean = false;

  constructor(private selectedUserService: SelectedUserService) {}

  showUser(user: Users): void {
    this.isActive = !this.isActive;
    this.selectedUserService.selectedUserUpdate = user;
  }
}
