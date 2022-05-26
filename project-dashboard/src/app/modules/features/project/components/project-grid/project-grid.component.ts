import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Project } from 'src/app/modules/shared/interfaces/project.interface';

@Component({
  selector: 'jrs-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectGridComponent implements OnInit {
  @Input() projects: Project[] | null = [];

  constructor() {}

  ngOnInit(): void {}
}
