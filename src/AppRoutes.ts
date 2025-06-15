import { Routes } from '@angular/router';
import { TasksComponent } from './app/tasks/tasks.component';
import { NoTaskComponent } from './app/tasks/no-task/no-task.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },
  {
    path: 'tasks',
    component: TasksComponent,
  },
];
