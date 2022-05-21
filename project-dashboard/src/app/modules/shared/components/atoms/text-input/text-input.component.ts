import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiSize, UiTextInputType } from '../../../types/ui.types';

@Component({
  selector: 'jrs-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @Input() inputId: string;

  @Input() inputValue: string;

  @Input() placeholder: string;

  @Input() inputType: UiTextInputType = 'text';

  @Input() size: UiSize = 'm';

  @Input() isRequired = false;

  @Output() blurOutputEvent: EventEmitter<string> = new EventEmitter();

  @Output() focusOutputEvent: EventEmitter<string> = new EventEmitter();

  @Output() keyupOutputEvent: EventEmitter<string> = new EventEmitter();

  handleBlurOutputEvent(event: string) {
    this.blurOutputEvent.emit(event);
  }

  handleFocusOutputEvent(event: string) {
    this.focusOutputEvent.emit(event);
  }

  handleKeyupOutputEvent(event: string) {
    this.keyupOutputEvent.emit(event);
  }
}
