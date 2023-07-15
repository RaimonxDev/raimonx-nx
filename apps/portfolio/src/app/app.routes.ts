import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./layouts/main-layout.component'),
    data: {
      layout: 'classic'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'

      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component'),
        title: 'Home'
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component'),
        title: 'About'
      },
      {
        path: 'blog',
        loadChildren: () => import('./pages/blog/blog.routing'),
        title: 'Blog'
      },
      {
        path: 'projects',
        loadChildren: () => import('./pages/projects/projects.routing'),
        title: 'Projects'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
