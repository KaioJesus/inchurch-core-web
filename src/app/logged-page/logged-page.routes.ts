import { Routes } from '@angular/router';
import { LoggedPageComponent } from './logged-page.component';
import { EventsComponent } from './components/events/events.component';
import { ReadingPlansComponent } from './components/reading-plans/reading-plans.component';


export const loggedPageRoutes: Routes = [
  {
      path: '',
      component: LoggedPageComponent,
      children: [
        {
          path: 'planos-de-leitura',
          component: ReadingPlansComponent
        },
        {
          path: 'eventos',
          component: EventsComponent
        },
      ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
