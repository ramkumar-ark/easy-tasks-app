import { NewTaskComponent } from './app/tasks/new-task/new-task.component';
import { Routes } from '@angular/router';
import { TasksComponent } from './app/tasks/tasks.component';
import { NoTaskComponent } from './app/tasks/no-task/no-task.component';
import {
  userNameResolver,
  UserTasksComponent,
} from './app/users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './app/not-found/not-found.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    resolve: {
      userName: userNameResolver,
    },
    children: [
      { path: '', redirectTo: 'tasks', pathMatch: 'full' },
      { path: 'tasks', component: TasksComponent },
      { path: 'tasks/new', component: NewTaskComponent },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
