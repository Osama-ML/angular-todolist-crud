import { Component } from '@angular/core';
import {TasksService} from './services/tasks.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudPrueba';
  constructor(private tasksService:TasksService){
    this.showTasks();
  }

  public tasks: any[] = [];
  public task = {
    title: ""
  }

  async showTasks(){
    this.tasks = await this.tasksService.getTasks();
  }
  async editTask(task){
    await this.tasksService.editTask(task);
  }
  async deleteTask(task){
    await this.tasksService.deleteTask(task);
    this.tasks = this.tasks.filter(t => t.id != task.id)
  }
  async addTask(task){
    let taskCreated = await this.tasksService.addNewTask(task)
    this.tasks.push(taskCreated);
  }
}
