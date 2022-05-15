import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { UiSize } from '../../../types/ui.types';

@Component({
  selector: 'jrs-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() label = '';

  @Input() type: 'primary' | 'secondary' = 'primary';

  @Input() size: UiSize = 'm';

  @Output() clickEvent: EventEmitter<Event> = new EventEmitter();

  onClick(event: Event): void {
    this.clickEvent.emit(event);
  }

}
