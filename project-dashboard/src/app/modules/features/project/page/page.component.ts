import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jrs-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class ProjectPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('project page loaded');
  }
}
