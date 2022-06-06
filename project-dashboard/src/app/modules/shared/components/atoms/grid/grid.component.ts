import { Component, Input } from '@angular/core';
import { UiSize } from '@modules/shared/types/ui.types';
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'jrs-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  @Input() columnDefs: ColDef[];
  @Input() defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    flex: 1,
    minWidth: 100,
  };
  @Input() data: any[];
  @Input() height: UiSize = 'm';

  private gridApi: GridApi;
  private gridColumnApi!: ColumnApi;

  rowData: any[];

  onGridReady(params: GridReadyEvent) {
    console.log('ran');
    let columnIds: string[] = [];
    this.columnDefs.forEach((item) => {
      if (item.field) {
        columnIds.push(item.field);
      }
    });

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.rowData = this.data;
    this.gridApi.sizeColumnsToFit();
    console.log(columnIds);
    this.gridColumnApi.autoSizeColumns(columnIds, true);
  }
}
