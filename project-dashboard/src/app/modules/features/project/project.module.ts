import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPageComponent } from './page/page.component';
import { SharedModule } from '../../shared/shared.module';
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
  declarations: [ProjectPageComponent],
  imports: [CommonModule, SharedModule, ProjectRoutingModule],
})
export class ProjectModule {}
