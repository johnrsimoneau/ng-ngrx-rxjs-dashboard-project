import { Component, Input } from '@angular/core';
import { UiSize } from '../../../types/ui.types';

@Component({
  selector: 'jrs-input-label',
  templateUrl: './input-label.component.html',
  styleUrls: ['./input-label.component.scss']
})
export class InputLabelComponent {
  @Input() labelId: string;

  @Input() labelName = '';

  @Input() size: UiSize = 'm';

  @Input() isRequired = false;

}
