import { R3ResolvedDependencyType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  jsonServerURL = "http://localhost:3000/tasks"

  constructor() { }

    getTasks(): Promise<any>{
      return axios.get(this.jsonServerURL).then(response => response.data)
    }
    deleteTask(task){
      return axios.delete(this.jsonServerURL + `/${task.id}`).then(response => response.data)
    }
    addNewTask(task){
      return axios.post(this.jsonServerURL,task).then(response => response.data)
    }
    editTask(task){
      return axios.put(this.jsonServerURL + `/${task.id}`,task).then(response => response.data)
    }


}
