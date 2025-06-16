import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoggedPageComponent } from './logged-page/logged-page.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
      path: '',
      component: LoginComponent,
  },
  {
      path: 'home',
      component: LoggedPageComponent,
      canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: '' 
  }
];
