import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-display-toggle',
  templateUrl: './display-toggle.component.html',
  styleUrls: ['./display-toggle.component.scss'],
})
export class DisplayToggleComponent implements OnInit {
  @ViewChild('updateText') updateTextEl;
  @Input() text;
  // @Input() editMode: boolean;
  @Output() inputBlur = new EventEmitter();
  @Output() inputChange = new EventEmitter();

  editMode = false;

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.editMode = true;
    setTimeout(() => {
      this.updateTextEl.setFocus();
    }, 0);
  }

  onChange(e) {
    this.text = e.detail.value;
    this.inputChange.emit(this.text);
  }

  onBlur() {
    this.editMode = false;
  }
}
