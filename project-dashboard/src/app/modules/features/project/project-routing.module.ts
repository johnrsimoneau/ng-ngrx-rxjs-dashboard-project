import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectPageComponent } from './page/page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProjectPageComponent,
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
