import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { exhaustMap, Observable, tap } from 'rxjs';
import { ProjectDashboardService } from 'src/app/modules/core/services/project-dashboard.service';
import { Project } from 'src/app/modules/shared/interfaces/project.interface';
import { setPageTitle } from 'src/app/state/app.actions';

@Component({
  selector: 'jrs-page',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(private projectService: ProjectDashboardService) {}

  ngOnInit(): void {
    this.projects$ = this.projectService.projects$.pipe();
  }
}
