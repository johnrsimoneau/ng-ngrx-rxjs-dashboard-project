import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavLinkObj } from '../../../interfaces/ui.interface';

@Component({
  selector: 'jrs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() headerTitle: string | null;

  @Input() navLinks: NavLinkObj[] = [];

  @Output() logoClickEvent: EventEmitter<any> = new EventEmitter();

  @Output() linkClickEvent: EventEmitter<string> = new EventEmitter();

  handleLogoClickEvent() {
    this.logoClickEvent.emit();
  }

  handleLinkClickEvent(event: any) {
    this.linkClickEvent.emit(event);
  }
}
