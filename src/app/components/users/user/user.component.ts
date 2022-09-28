import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Users } from '../../../models/users';
import { SelectedUserService } from '../../../services/selected-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() users: Users;
  @Output() isActive: EventEmitter<void> = new EventEmitter<void>();

  constructor(private selectedUserService: SelectedUserService) {}

  showUser(user: Users): void {
    this.isActive.emit();
    user.isActive = true;
    this.selectedUserService.selectedUserUpdate = user;
  }
}
