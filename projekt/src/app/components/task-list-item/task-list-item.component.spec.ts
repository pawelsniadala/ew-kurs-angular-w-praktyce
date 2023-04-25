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
  });

  it('should switch to edit when "edit" button is clicked', () => {
    const editSpy = spyOn(component, 'edit').and.callThrough();
    const button = fixture.debugElement.query(By.css('.edit-button'));
    button.triggerEventHandler('click', {});
    expect(editSpy).toHaveBeenCalled();
    expect(component.editMode).toEqual(true);
  });

  it('should show task name inside input', () => {
    const input = fixture.debugElement.query(By.css('.task-name-input'));
    expect((input.nativeElement as HTMLInputElement).value).toEqual(
      component.message
    );
  });

  it('should update task name when input value changes', () => {
    const inputElem = fixture.debugElement.query(By.css('.task-name-input'));
    const elem = inputElem.nativeElement as HTMLInputElement;
    elem.value = 'Changed value!';
    inputElem.triggerEventHandler('input', {
      target: elem
    });
    expect(component.message).toEqual('Changed value!');
  });
});
