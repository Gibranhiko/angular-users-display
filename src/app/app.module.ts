import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Header } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, Header, UsersComponent, UserComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
