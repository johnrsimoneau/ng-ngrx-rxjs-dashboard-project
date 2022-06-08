import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '@modules/shared/interfaces/project.interface';
import {
  catchError,
  combineLatest,
  delay,
  map,
  Observable,
  throwError,
} from 'rxjs';
import { DateUtility } from '../utilities/date.util';
import { HttpUtility } from '../utilities/http.util';
import { CompanyService } from './company.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectUrl = 'http://localhost:3000/projects';

  projects$ = this.http.get<Project[]>(this.projectUrl).pipe(
    delay(750),
    map((projects) => {
      projects.forEach((item) => {
        item.startDate = DateUtility.getDate(item.modifiedDate);
        item.modifiedDate = DateUtility.getDate(item.modifiedDate);
        item.projectedEndDate = DateUtility.getDate(item.projectedEndDate);
      });
      return projects;
    }),
    catchError(HttpUtility.handleError)
  );

  projectsWithCompanies$ = combineLatest([
    this.projects$,
    this.companyService.companies$,
  ]).pipe(
    map(([projects, companies]) =>
      projects.map(
        (project) =>
          ({
            ...project,
            companyName: companies.find((c) => project.companyId === c.id)
              ?.companyName,
          } as Project)
      )
    )
  );

  constructor(
    private http: HttpClient,
    private companyService: CompanyService
  ) {}
}
