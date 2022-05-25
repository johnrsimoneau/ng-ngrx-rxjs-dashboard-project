import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiSize } from '../../../types/ui.types';

@Component({
  selector: 'jrs-nav-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
  @Input() linkTo = '';

  @Input() linkText = '';

  @Input() size: UiSize = 'm';

  @Input() openInNewTab = false;

  @Output() linkClickEvent: EventEmitter<string> = new EventEmitter();

  handleLinkClick(event: Event) {
    this.linkClickEvent.emit(this.linkText);
  }
}
