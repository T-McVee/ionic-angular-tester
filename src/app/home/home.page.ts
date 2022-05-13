import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'Task Tracker';

  showForm = false;

  constructor() {}

  toggleAddTask() {
    // toggle displaying an add task form
    console.log('toggle');
    this.showForm = !this.showForm;
  }
}
