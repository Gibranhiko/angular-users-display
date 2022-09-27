import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../../models/users';
import { SelectedUserService } from '../../services/selected-user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class Header {
  userData$: Observable<Users>;

  constructor(selectedUserService: SelectedUserService) {
    this.userData$ = selectedUserService.selectedUser;
  }
}
