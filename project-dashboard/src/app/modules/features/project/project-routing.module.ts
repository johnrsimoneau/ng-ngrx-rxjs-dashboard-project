import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './page/project.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProjectComponent,
    // children: [
    //   { path: '', component: ProjectPageComponent, pathMatch: 'full' },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
