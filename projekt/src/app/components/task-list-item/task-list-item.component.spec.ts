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
    expect(component).toBeTruthy();
  });

  it('should render task name', () => {
    // const elems = fixture.debugElement.queryAll(By.css('p'));
    // console.log(elems);

    const elem = fixture.debugElement.query(By.css('.message'));
    expect(elem.nativeElement.innerText).toEqual('message works!');
  });
});
