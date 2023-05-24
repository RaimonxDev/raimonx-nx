import { Route } from "@angular/router";
export const blogRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./blog.component'),
    title: 'Blog',
  }
] as Route[];


export default blogRoutes;
