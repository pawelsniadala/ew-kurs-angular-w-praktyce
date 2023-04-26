import {
  ComponentFixture,
  TestBed,
  waitForAsync
} from '@angular/core/testing';
import { TaskListItemComponent } from './task-list-item.component';
import { By } from '@angular/platform-browser';
import {
  FormsModule,
  NgModel
} from '@angular/forms';
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
  template: `<app-task-list-item></app-task-list-item>`
})

class TaskListItemComponentSpec {
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

describe('TaskListItemComponent', () => {
  let component: TaskListItemComponent;
  let fixture: ComponentFixture<TaskListItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        TaskListItemComponent,
        TaskListItemComponentSpec
      ],
      imports: [FormsModule],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(TaskListItemComponent);
    // component = fixture.componentInstance;
    fixture = TestBed.createComponent(TaskListItemComponentSpec);
    component = fixture.debugElement.query(By.directive(TaskListItemComponent)).componentInstance;
    fixture.debugElement.context.task = {
      id: 1,
      title: 'Test Task works!'
    };
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render task name', () => {
    const elem = fixture.debugElement.query(By.css('.task-name'));
    expect(elem.nativeElement.innerText).toEqual('Test Task works!');
  });

  it('should render updated task', () => {
    component.task = {
      id: 2,
      title: 'Updated name!'
    };
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

  describe("in edit mode", () => {
    beforeEach(() => {
      component.editMode = true;
      fixture.detectChanges();
    });

    it('should switch edit mode off when "save" button is clicked', () => {
      component.editMode = true;
      fixture.detectChanges();
      const editSpy = spyOn(component, "save").and.callThrough();
      const button = fixture.debugElement.query(By.css(".save-button"));
      button.triggerEventHandler("click", {});
      expect(editSpy).toHaveBeenCalled();
      expect(component.editMode).toEqual(false);
    });

    it("should show task name inside input", async () => {
      const input = fixture.debugElement.query(By.directive(NgModel));
      await fixture.whenStable();
      expect((input.nativeElement as HTMLInputElement).value).toEqual(
        component.task.title
      );
    });

    it("should update task name when input value changes", () => {
      // const inputElem = fixture.debugElement.query(By.css(".task-name-input"));
      const inputElem = fixture.debugElement.query(By.directive(NgModel));
      const elem = inputElem.nativeElement as HTMLInputElement;
      elem.value = "Changed value!";
      // elem.dispatchEvent(new Event("input"));
      inputElem.triggerEventHandler("input", {
        target: elem
      });
      expect(component.task.title).toEqual("Changed value!");
    });

    it("should show error message when task name is empty", () => {
      component.editMode = true;
      fixture.detectChanges();
      const inputElem = fixture.debugElement.query(By.directive(NgModel));
      const model = inputElem.injector.get(NgModel);
      // model.control.setValue('wartosc')
      // fixture.detectChanges()
      expect(model.valid).toBeFalsy();
      const error = fixture.debugElement.query(By.css(".error"));
      expect(error).not.toBeNull("Error message not found");
    });

    it('should emit saved event when save button clicked', (done) => {
      const button = fixture.debugElement.query(By.css(".save-button"));
      const saveSpy = spyOn(component, 'save').and.callThrough();
      const taskToSave = component.task;
      component.saved.subscribe((task) => {
        expect(taskToSave).toEqual(task);
        done();
      });
      button.triggerEventHandler('click', {});
      expect(saveSpy).toHaveBeenCalled();
    });
  });
});
