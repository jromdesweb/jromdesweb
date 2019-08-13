import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoService=[
    {"task":"Tarea 1", "descr":"Texto ........."},
    {"task":"Tarea 2", "descr":"Texto ........."},
    {"task":"Tarea 3", "descr":"Texto ........."},
    {"task":"Tarea 4", "descr":"Texto ........."}
  ]
  constructor() { }
  getTodo(){
    return this.todoService;
  }

  addTodo(task:any ,descr:any){
    this.todoService.push({
      "task":task.value, "descr":descr.value })
  }

  deleteTask(taskDelete:string){
    let indexTask:number
    this.todoService.forEach((element, index)=>{
      if(taskDelete == element.task) {
        indexTask = index
      }
    })

    this.todoService.splice(indexTask, 1)
  }

  getOneTodo(idtask: string)
  {
    console.log('getOneTodo> ', idtask)
    // let indexTask:number
    // indexTask = parseInt(idtask.substring(2,1));   
    // console.log('indexTask> ', indexTask)
    let task: string
    let descr: string     

    this.todoService.forEach((element)=>{       
      if(element.task == idtask) {        
        task = element.task
        descr = element.descr
      }
    })

    return {"task":task, "descr": descr}
  }
}
