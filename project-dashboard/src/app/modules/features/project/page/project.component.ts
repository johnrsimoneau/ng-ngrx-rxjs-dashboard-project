import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jrs-page',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('project page loaded');
  }
}
