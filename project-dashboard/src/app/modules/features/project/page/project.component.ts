import { Component, OnDestroy, OnInit } from '@angular/core';
import { Status } from '@modules/shared/types/status.types';
import { ProjectFacade } from '@modules/features/project/state/project.facade';
import { Subject } from 'rxjs';

@Component({
  selector: 'jrs-page',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit, OnDestroy {
  private _destroySubject$: Subject<void> = new Subject();

  projects$ = this.projectFacade.projects$;

  filteredProjects$ = this.projectFacade.filteredProjects$;

  projectsLoading$ = this.projectFacade.projectsLoading$;

  constructor(private projectFacade: ProjectFacade) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    // NOT NEEDED, BUT LEAVING AS AN EXAMPLE
    this._destroySubject$.next();
    this._destroySubject$.complete();
  }

  handleSelectedStatus(status: Status) {
    // TODO - handle dispatching actio
    this.projectFacade.statusSelect(status);
  }
}
