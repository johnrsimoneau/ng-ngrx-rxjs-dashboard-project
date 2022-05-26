import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../../shared/interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectDashboardService {
  private projectDashboardUrl = 'http://localhost:3000/projects';

  constructor(private http: HttpClient) {}

  getAllProjects() {
    return this.http.get<Project[]>(this.projectDashboardUrl).pipe();
  }
}
