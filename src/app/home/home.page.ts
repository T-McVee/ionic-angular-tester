import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  title = 'Task Tracker';

  tasks = [];
  showForm = false;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  toggleAddTask() {
    // toggle displaying an add task form
    console.log('toggle');
    this.showForm = !this.showForm;
  }

  addTask({ value }) {
    console.log(value);
    this.taskService
      .addNewTaskItem(value)
      .subscribe((task) => this.tasks.push(task));
  }
}
