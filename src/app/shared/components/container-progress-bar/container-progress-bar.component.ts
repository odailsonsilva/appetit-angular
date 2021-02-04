import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-container-progress-bar',
  templateUrl: './container-progress-bar.component.html',
  styleUrls: ['./container-progress-bar.component.scss']
})
export class ContainerProgressBarComponent implements OnInit {

  @Input() progress: any
  @Input() passo: any

  constructor() { }

  ngOnInit(): void {
  }

}
