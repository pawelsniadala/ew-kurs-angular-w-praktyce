import {
  ComponentFixture,
  TestBed,
  waitForAsync
} from '@angular/core/testing';
import { TaskListItemComponent } from './task-list-item.component';

describe('TaskListItemComponent', () => {
  let component: TaskListItemComponent;
  let fixture: ComponentFixture<TaskListItemComponent>;

  beforeEach( waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListItemComponent],
      imports: [],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    const html = fixture.nativeElement.innerHTML;

    console.log(html);
    expect(component).toBeTruthy();
  });
});
