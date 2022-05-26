import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Project } from '../../shared/interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectUrl = 'http://localhost:3000/projects';

  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http
      .get<Project[]>(this.projectUrl)
      .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;
    }
    console.error(err);
    return throwError(() => errorMessage);
  }
}
