import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DateUtility } from '@modules/core/utilities/date.util';
import { ColDef, ValueFormatterParams } from 'ag-grid-community';
import { Project } from 'src/app/modules/shared/interfaces/project.interface';

function dateFormatter(params: ValueFormatterParams) {
  return DateUtility.getDate(params.value);
}

function percentFormatter(params: ValueFormatterParams) {
  return `${params.value}%`;
}

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
      headerName: 'S',
      field: 'overallStatus',
      cellClassRules: {
        'status-green': 'x === "G"',
        'status-yellow': 'x === "Y"',
        'status-red': 'x === "R"',
      },
      width: 60,
      headerClass: 'header-status',
    },
    {
      headerName: 'Project',
      field: 'projectCodeName',
      flex: 2,
    },
    {
      headerName: 'Company',
      field: 'companyName',
      flex: 2,
    },
    {
      headerName: '%',
      field: 'percentageComplete',
      valueFormatter: percentFormatter,
    },
    {
      headerName: 'Start',
      field: 'startDate',
      valueFormatter: dateFormatter,
    },
    {
      headerName: 'End',
      field: 'projectedEndDate',
      valueFormatter: dateFormatter,
    },
  ];
}
