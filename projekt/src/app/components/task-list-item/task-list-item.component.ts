import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})

export class TaskListItemComponent {
  message: string = 'Message works!';
  editMode: boolean = false;

  edit() {
    this.editMode = true;
  }
}
