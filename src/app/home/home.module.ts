import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { TasksComponent } from '../components/tasks/tasks.component';
import { TaskItemComponent } from '../components/task-item/task-item.component';
import { ButtonComponent } from '../components/button/button.component';
import { DisplayToggleComponent } from '../components/display-toggle/display-toggle.component';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    TasksComponent,
    ButtonComponent,
    TaskItemComponent,
    DisplayToggleComponent,
  ],
})
export class HomePageModule {}
