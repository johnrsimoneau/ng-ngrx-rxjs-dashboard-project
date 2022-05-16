import { Component, Input } from '@angular/core';

@Component({
  selector: 'jrs-nav-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  @Input() linkTo = '';

  @Input() linkText = '';

  @Input() openInNewTab = false;

}
