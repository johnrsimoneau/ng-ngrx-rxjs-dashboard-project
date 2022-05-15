import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiSize, UiTextInputType } from '../../../types/ui.types';

@Component({
  selector: 'jrs-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
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

  handleBlurOutputEvent(input: string) {
    this.blurOutputEvent.emit(this.inputValue);
  }

  handleFocusOutputEvent(input: string) {
    this.focusOutputEvent.emit(input);
  }

  handleKeyupOutputEvent(input: string) {
    this.keyupOutputEvent.emit(input);
  }

}
