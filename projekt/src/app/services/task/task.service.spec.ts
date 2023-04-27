import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

interface Task {
  id: number;
  title: string;
};

describe('TaskService', () => {
  let service: TaskService;
  let controller: HttpTestingController;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TaskService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(TaskService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shuld fetch task', () => {
    service.fetchAll().subscribe((tasks) => {
      expect(tasks).toEqual([
        {
          id: 3,
          title: 'New title'
        }
      ] as Task[])
    });
    const req = controller.expectOne('/tasks', 'Tasks API endpoint');
    req.flush([
      {
        id: 3,
        title: 'New title'
      }
    ])
  });

  it('should save task', () => {
    const task: Partial<Task> = {
      // id: 4,
      title: 'New title'
    };
    service.save(task).subscribe((task) => {
      expect(task).toBeDefined();
      expect(task.id).toBeDefined();
    })
    const req = controller.expectOne(req => {
      return req.method === 'POST' && req.body === task;
    });
    req.flush(
      {
        id: 4,
        title: 'New title'
      },
      {
        status: 201,
        statusText: 'Created'
      }
    );
  });
});
