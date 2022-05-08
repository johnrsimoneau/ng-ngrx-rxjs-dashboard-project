import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jrs-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label = '';

  @Input() type = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
