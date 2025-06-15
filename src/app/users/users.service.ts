import { Injectable, signal } from '@angular/core';

import { DUMMY_USERS } from '../../dummy-users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users = signal<typeof DUMMY_USERS>(DUMMY_USERS);
  getUserById(id: string) {
    return this.users().find((user) => user.id === id);
  }
}
