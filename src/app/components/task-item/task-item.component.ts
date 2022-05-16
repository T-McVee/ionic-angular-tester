import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @ViewChild('updateText') updateTextEl;
  @Input() task: Task;
  @Output() deleteTask = new EventEmitter();

  text: string;
  day: string;

  changeDate = false;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.text = this.task.text;
  }

  updateText(e) {
    this.text = e;
    this.onChange();
  }

  onChange() {
    const newTask = {
      id: this.task.id,
      text: this.text,
      day: this.task.day,
      reminder: this.task.reminder,
    };

    this.taskService
      .updateTaskItem(newTask)
      .subscribe((task) => (this.task = task));
  }

  onDeleteTask() {
    this.deleteTask.emit(this.task);
  }
}
