import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProjectDashboardService } from 'src/app/modules/core/services/project-dashboard.service';
import { setPageTitle } from 'src/app/state/app.actions';

@Component({
  selector: 'jrs-page',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  constructor(private projectService: ProjectDashboardService) {
    this.projectService.getAllProjects().subscribe({
      next: (response) => {},
    });
  }
}
