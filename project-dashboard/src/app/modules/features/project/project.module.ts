import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './page/project.component';
import { SharedModule } from '../../shared/shared.module';
import { ProjectRoutingModule } from './project-routing.module';
import { StoreModule } from '@ngrx/store';
import { ProjectGridComponent } from './components/project-grid/project-grid.component';

@NgModule({
  declarations: [ProjectComponent, ProjectGridComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule,
    StoreModule.forFeature('projects', {}),
  ],
})
export class ProjectModule {}
