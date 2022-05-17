import { Component, Input } from '@angular/core';

@Component({
  selector: 'jrs-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() color: 'black' | 'white' = "black";

  @Input() size: 'small' | 'large' = 'large';

}
