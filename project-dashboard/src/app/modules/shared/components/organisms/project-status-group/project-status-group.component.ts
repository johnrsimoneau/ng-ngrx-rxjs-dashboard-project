import { Component, Input, OnInit } from '@angular/core';
import { Project } from '@modules/shared/interfaces/project.interface';

@Component({
  selector: 'jrs-project-status-group',
  templateUrl: './project-status-group.component.html',
  styleUrls: ['./project-status-group.component.scss'],
})
export class ProjectStatusGroupComponent implements OnInit {
  @Input() projects: Project[] | null = [];

  greenCount: number = 0;
  yellowCount: number = 0;
  redCount: number = 0;

  constructor() {}

  ngOnInit(): void {
    if (!this.projects) {
      return;
    }

    this.greenCount = this.projects?.filter(
      (item) => item.overallStatus === 'G'
    ).length;

    this.yellowCount = this.projects?.filter(
      (item) => item.overallStatus === 'Y'
    ).length;

    this.redCount = this.projects?.filter(
      (item) => item.overallStatus === 'R'
    ).length;
  }
}
