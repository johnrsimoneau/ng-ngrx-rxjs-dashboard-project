import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'jrs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() headerTitle: string | null;

  @Output() logoClickEvent: EventEmitter<any> = new EventEmitter();

  @Output() linkClickEvent: EventEmitter<string> = new EventEmitter();

  handleLogoClickEvent() {
    this.logoClickEvent.emit();
  }
}
