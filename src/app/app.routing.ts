import { Routes } from '@angular/router';
import {BaseLayoutComponent} from './shared';
import {AuthLayoutComponent} from './shared';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './session/session.module#SessionModule'
      },
      {
        path: 'session',
        loadChildren: './session/session.module#SessionModule'
      }
    ]
  },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'session/404'
  }
];
