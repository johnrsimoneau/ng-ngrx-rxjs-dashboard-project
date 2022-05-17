import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/atoms/button/button.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faCircleCheck,
  faCircleExclamation,
  faFolder 
} from '@fortawesome/free-solid-svg-icons';
import { IconComponent } from './components/atoms/icon/icon.component';
import { InputLabelComponent } from './components/atoms/input-label/input-label.component';
import { TextInputComponent } from './components/atoms/text-input/text-input.component';
import { FormsModule } from '@angular/forms';
import { TextareaInputComponent } from './components/atoms/textarea-input/textarea-input.component';
import { LinkComponent } from './components/atoms/link/link.component';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './components/atoms/logo/logo.component';

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
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    // Atoms
    ButtonComponent,
    IconComponent,
    InputLabelComponent,
    TextInputComponent,
    TextareaInputComponent,
    LinkComponent,
    LogoComponent
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faCircleCheck,
      faCircleExclamation,
      faFolder
    );
  }
}
