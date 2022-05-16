import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UiSize } from '../../../types/ui.types';

@Component({
  selector: 'jrs-textarea-input',
  templateUrl: './textarea-input.component.html',
  styleUrls: ['./textarea-input.component.scss']
})
export class TextareaInputComponent {
  @Input() inputId: string;

  @Input() inputValue: string;

  @Input() placeholder: string;

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
