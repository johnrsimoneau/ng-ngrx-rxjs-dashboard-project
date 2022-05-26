import { Component, Input } from '@angular/core';
import { UiSize } from '@modules/shared/types/ui.types';

@Component({
  selector: 'jrs-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() size: UiSize = 'l';
}
