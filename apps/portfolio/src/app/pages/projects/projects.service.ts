import { Injectable, signal } from '@angular/core';


export interface Project {
  title: string;
  tags: string[];
  description: string;
  documentation: InnerHTML;
}

@Injectable({ providedIn: 'root' })
export class ProjectService {

  currentProject = signal<undefined | Project>(undefined)

  updateProject(project: Project) {
    this.currentProject.set(project)
  }

}


