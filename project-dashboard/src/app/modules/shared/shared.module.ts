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

@NgModule({
  declarations: [
    ButtonComponent,
    IconComponent,
    InputLabelComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ButtonComponent,
    IconComponent,
    InputLabelComponent,
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
