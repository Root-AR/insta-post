import { ModuleWithProviders, Injector } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/index';
import { Posts } from './posts/index';

export const appRoutes: Routes = [
  { path: 'login', component: Login },
  { path: 'posts', component: Posts },
  { path: '', component: Posts }
];
