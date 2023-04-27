import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListItemComponent } from './components/task-list-item/task-list-item.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task-list/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListItemComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
