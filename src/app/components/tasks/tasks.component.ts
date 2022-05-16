import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  @Input() tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {}

  onReorder(e) {
    // Not working --------
    e.detail.complete(this.tasks);
    console.log(this.tasks);
    this.taskService.updateTasks(this.tasks).subscribe();
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }
}
