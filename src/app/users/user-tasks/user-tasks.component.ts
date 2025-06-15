import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {
  userName = input.required<string>();
}

export const userNameResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot
) => {
  const userId = route.paramMap.get('userId');
  const userService = inject(UsersService);
  const user = userService.getUserById(userId!);
  return user ? user.name : '';
};
