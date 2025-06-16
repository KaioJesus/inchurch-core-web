import { Routes } from '@angular/router';
import { LoggedPageComponent } from './logged-page.component';
import { EventsComponent } from './events/events.component';
import { ReadingPlansComponent } from './reading-plans/reading-plans.component';
import { EmConstrucaoComponent } from './shared/em-construcao/em-construcao.component';
import { authGuard } from '../core/guards/auth.guard';
import { DetailEventsComponent } from './events/detail-events/detail-events.component';


export const loggedPageRoutes: Routes = [
  {
      path: '',
      loadComponent:()=>
        import('./logged-page.component').then(m => m.LoggedPageComponent),
      canActivate:[authGuard],
      children: [
        {
          path: '',
          component: EmConstrucaoComponent
        },
        {
          path: 'pessoas',
          component: EmConstrucaoComponent
        },
        {
          path: 'celulas',
          component: EmConstrucaoComponent
        },
        {
          path: 'kids',
          component: EmConstrucaoComponent
        },
        {
          path: 'oracoes',
          component: EmConstrucaoComponent
        },
        {
          path: 'conteudo',
          component: EmConstrucaoComponent
        },
        {
          path: 'eventos',
          component: EventsComponent,
        },
        {
          path: 'eventos/details/:id',
           loadComponent: () =>
          import(
            './events/detail-events/detail-events.component'
          ).then(m => m.DetailEventsComponent),
          title: 'Detalhes do evento',
        },
        {
          path: 'xmission',
          component: EmConstrucaoComponent
        },
        {
          path: 'loja',
          component: EmConstrucaoComponent
        },
        {
          path: 'planos-de-leitura',
          component: ReadingPlansComponent
        },
      ]
    },
  {
    path: '**',
    redirectTo: ''
  }
];
