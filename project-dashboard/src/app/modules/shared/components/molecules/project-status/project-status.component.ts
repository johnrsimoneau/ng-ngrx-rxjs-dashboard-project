import { Component, Input, OnInit } from '@angular/core';
import { Status } from '@modules/shared/types/status.types';

@Component({
  selector: 'jrs-project-status',
  templateUrl: './project-status.component.html',
  styleUrls: ['./project-status.component.scss'],
})
export class ProjectStatusComponent implements OnInit {
  @Input() status: Status = 'none';

  @Input() projectCount: number;

  constructor() {}

  ngOnInit(): void {}
}
