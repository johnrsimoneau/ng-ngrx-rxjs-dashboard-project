import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Project } from 'src/app/modules/shared/interfaces/project.interface';

@Component({
  selector: 'jrs-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectGridComponent {
  @Input() projects: Project[] | null = [];

  columnDefs: ColDef[] = [
    {
      field: 'projectCodeName',
    },
    {
      field: 'overallStatus',
    },
    {
      field: 'startDate',
    },
    {
      field: 'projectedEndDate',
    },
    {
      field: 'percentageComplete',
    },
  ];
}
