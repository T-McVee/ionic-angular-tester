import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Output() formSubmit = new EventEmitter();

  taskFormData: FormGroup;

  constructor() {}

  ngOnInit() {
    this.taskFormData = new FormGroup({
      text: new FormControl('', [Validators.required, Validators.minLength(3)]),
      day: new FormControl(''),
      reminder: new FormControl(),
    });
  }

  onSubmit() {
    this.formSubmit.emit(this.taskFormData);
  }

  get text() {
    return this.taskFormData.get('text');
  }

  get day() {
    return this.taskFormData.get('day');
  }

  get reminder() {
    return this.taskFormData.get('reminder');
  }
}
