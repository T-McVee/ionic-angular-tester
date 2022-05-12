import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;

  clicked = false;

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.clicked = !this.clicked;
    console.log(this.clicked);
  }
}