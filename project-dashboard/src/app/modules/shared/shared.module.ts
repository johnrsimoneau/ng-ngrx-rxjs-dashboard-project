import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/atoms/button/button.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faCircleCheck,
  faCircleExclamation,
  faFolder,
} from '@fortawesome/free-solid-svg-icons';
import { IconComponent } from './components/atoms/icon/icon.component';
import { InputLabelComponent } from './components/atoms/input-label/input-label.component';
import { TextInputComponent } from './components/atoms/text-input/text-input.component';
import { TextareaInputComponent } from './components/atoms/textarea-input/textarea-input.component';
import { LinkComponent } from './components/atoms/link/link.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { DropdownInputComponent } from './components/atoms/dropdown-input/dropdown-input.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { LoaderComponent } from './components/atoms/loader/loader.component';
import { GridComponent } from './components/atoms/grid/grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { ProjectStatusComponent } from './components/molecules/project-status/project-status.component';
import { ProjectStatusGroupComponent } from './components/organisms/project-status-group/project-status-group.component';

@NgModule({
  declarations: [
    // Atoms
    ButtonComponent,
    IconComponent,
    InputLabelComponent,
    TextInputComponent,
    TextareaInputComponent,
    LinkComponent,
    LogoComponent,
    DropdownInputComponent,
    LoaderComponent,
    GridComponent,
    // Molecules
    ProjectStatusComponent,
    // Organisms
    HeaderComponent,
    ProjectStatusGroupComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule,
    AgGridModule,
  ],
  exports: [
    // Atoms
    ButtonComponent,
    IconComponent,
    InputLabelComponent,
    TextInputComponent,
    TextareaInputComponent,
    LinkComponent,
    LogoComponent,
    DropdownInputComponent,
    LoaderComponent,
    GridComponent,
    // Molecules
    ProjectStatusComponent,
    // Organisms
    HeaderComponent,
    ProjectStatusGroupComponent,
  ],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCircleCheck, faCircleExclamation, faFolder);
  }
}
