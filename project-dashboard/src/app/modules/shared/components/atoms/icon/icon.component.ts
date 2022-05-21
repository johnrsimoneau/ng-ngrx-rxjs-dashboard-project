import { Component, Input } from '@angular/core';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { UiIconSize, UiColor } from '../../../types/ui.types';

@Component({
  selector: 'jrs-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() iconName: IconName;

  @Input() size: UiIconSize = '3x';

  @Input() color: UiColor = 'secondary';

  constructor() {}

  setIconForDisplay(): [IconPrefix, IconName] {
    return ['fas', this.iconName];
  }
}
