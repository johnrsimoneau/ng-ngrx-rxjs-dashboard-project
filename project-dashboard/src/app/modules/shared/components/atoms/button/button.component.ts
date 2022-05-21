import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiSize } from '../../../types/ui.types';

@Component({
  selector: 'jrs-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label = '';

  @Input() type: 'primary' | 'secondary' = 'primary';

  @Input() size: UiSize = 'm';

  @Output() clickOutputEvent: EventEmitter<Event> = new EventEmitter();

  handleButtonClickEvent(event: Event): void {
    this.clickOutputEvent.emit(event);
  }
}
