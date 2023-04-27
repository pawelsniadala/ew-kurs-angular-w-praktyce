import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Task {
  id: number;
  title: string;
};

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  save(task: Partial<Task>): Observable<Task> {
    return this.http.post<Task>('/tasks', task);
  }

  fetchAll(): Observable<Task[]> {
    return this.http.get<Task[]>('/tasks');
  }

  constructor(private http: HttpClient) {}
}
