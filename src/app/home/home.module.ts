import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { TasksComponent } from '../components/tasks/tasks.component';
import { TaskItemComponent } from '../components/task-item/task-item.component';
import { AddTaskComponent } from '../components/add-task/add-task.component';
import { ButtonComponent } from '../components/button/button.component';
import { DisplayToggleComponent } from '../components/display-toggle/display-toggle.component';
import { ExpenseTrackerComponent } from '../components/expense-tracker/expense-tracker.component';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomePage,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    ButtonComponent,
    DisplayToggleComponent,
    ExpenseTrackerComponent,
  ],
})
export class HomePageModule {}
