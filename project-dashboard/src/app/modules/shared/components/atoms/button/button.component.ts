import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'jrs-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() label = '';

  @Input() type: 'primary' | 'secondary' = 'primary';

  @Input() size: 'xs' | 's' | 'm' | 'l' | 'xl' = 'm';

  @Input() iconName: string;

  @Input() isSolidIcon = false;

  @Output() clickEvent: EventEmitter<Event> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  onClick(event: Event): void {
    this.clickEvent.emit(event);
  }

}
