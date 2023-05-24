import { Route } from "@angular/router";
export const projectsRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./projects.component'),
    title: 'Projects'
  }
] as Route[];


export default projectsRoutes;
