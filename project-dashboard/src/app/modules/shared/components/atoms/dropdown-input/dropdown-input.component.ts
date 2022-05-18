import { Component, Input } from '@angular/core';
import { Dropdown } from '../../../interfaces/ui.interface';
import { UiSize } from '../../../types/ui.types';

@Component({
  selector: 'jrs-dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.scss']
})
export class DropdownInputComponent {
  @Input() inputId: string;

  @Input() selectedValue: Dropdown;

  @Input() options: Dropdown[];

  @Input() placeholder = "Choose option...";

  @Input() size: UiSize = 'm';

  @Input() isRequired = false;

  @Input() accessibilityLabelName: string;
}
