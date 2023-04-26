import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

interface Task {
  id: number,
  title: string
};

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})

export class TaskListItemComponent {
  message: string = 'Message works!';
  editMode: boolean = false;

  @Input() task: Task = {
    id: 1,
    title: 'Test Task works!'
  }

  @Output() saved = new EventEmitter<Task>;

  edit() {
    this.editMode = true;
  }

  save() {
    this.editMode = false;
    this.saved.emit(this.task);
  }
}
