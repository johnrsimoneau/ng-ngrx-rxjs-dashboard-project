import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'jrs-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() label = '';

  @Input() type: 'primary' | 'secondary' = 'primary';

  @Input() size: 'xs' | 's' | 'm' | 'l' | 'xl' = 'm';

  @Output() clickEvent: EventEmitter<Event> = new EventEmitter();

  constructor() { }

  onClick(event: Event): void {
    this.clickEvent.emit(event);
  }

}
