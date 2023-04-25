import {
  ComponentFixture,
  TestBed,
  waitForAsync
} from '@angular/core/testing';
import { TaskListItemComponent } from './task-list-item.component';
import { By } from '@angular/platform-browser';

describe('TaskListItemComponent', () => {
  let component: TaskListItemComponent;
  let fixture: ComponentFixture<TaskListItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListItemComponent],
      imports: [],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListItemComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render task name', () => {
    const elem = fixture.debugElement.query(By.css('.task-name'));
    expect(elem.nativeElement.innerText).toEqual('Message works!');
  });

  it('should render updated task name', () => {
    component.message = 'Updated name!';
    fixture.autoDetectChanges();
    const elem = fixture.debugElement.query(By.css('.task-name'));
    expect(elem.nativeElement.innerText).toEqual('Updated name!');
  })
});
