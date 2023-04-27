import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task/task.service';

interface Task {
  id: number;
  title: string;
};

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent {
  tasks: Task[] = [];

  fetchData(): any {
    this.service.fetchAll().subscribe(data => {
      this.tasks = data
    })
  }

  constructor(private service: TaskService) {}
}
