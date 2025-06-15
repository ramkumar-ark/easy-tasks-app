import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet],
})
export class UserTasksComponent {
  userId = input.required<string>();
  private userService = inject(UsersService);
  user = computed(() => this.userService.getUserById(this.userId()));
}
