import { Component, Input, OnInit } from '@angular/core';
import { UiSize } from '@modules/shared/types/ui.types';
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'jrs-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() columnDefs: ColDef[];
  @Input() defaultColDef: ColDef = {
    sortable: true,
  };
  @Input() data: any[];
  @Input() height: UiSize = 'm';

  gridId = Math.floor(Math.random() * 100000000);

  private gridApi!: GridApi;
  private gridColumnApi!: ColumnApi;

  rowData: any[];

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    let columnIds: string[] = [];
    this.columnDefs.forEach((item) => {
      if (item.field) {
        columnIds.push(item.field);
      }
    });
  }
}
