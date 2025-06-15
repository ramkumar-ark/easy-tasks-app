import { Component, computed, inject, input, Signal } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  userId = input.required<string>();
  order = input<'asc' | 'desc'>();
  private readonly tasksService = inject(TasksService);
  userTasks: Signal<Task[]> = computed(() =>
    this.tasksService.getTasksByUserId(this.userId()).sort((a, b) => {
      if (this.order() === 'asc') {
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      } else {
        return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
      }
    })
  );
}
