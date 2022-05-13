import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jrs-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  @Input() label = '';

  @Input() type: 'primary' | 'primary-outline' | 'secondary' | 'secondary-outline' = 'primary';

  @Input() size: 'xs' | 's' | 'm' | 'l' | 'xl' = 'm';

  constructor() { }

  ngOnInit(): void {
    console.log(this.size);
  }

}
