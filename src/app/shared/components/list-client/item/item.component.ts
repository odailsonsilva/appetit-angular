import { Component, Input, OnInit } from '@angular/core';
import { ListProducts } from '../list';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() produto: any = ''

  constructor() { }

  ngOnInit(): void {
  }

}
