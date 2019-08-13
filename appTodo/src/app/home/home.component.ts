import { Component, OnInit } from '@angular/core';
import { TodoService} from './../service/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todo=[]
  constructor(private _serviTodoSer:TodoService) {
    this.todo = this._serviTodoSer.getTodo();
   }

  ngOnInit() {

  }

  addtask(task:any ,descr:any){
    // console.log('Task', task.value);
    // console.log('Descr', descr.value);
    // this.todo.push({
    //   "task":task.value, "descr":descr.value })
    // task.value = ""
    // descr.value = ""
    //   console.log(this.todo);
    this._serviTodoSer.addTodo(task, descr)
    return false
  }

  // deleteTask(taskDelete:string){
  //   let indexTask:number
  //   this.todo.forEach((element, index)=>{
  //     if(taskDelete == element.task) {
  //       indexTask = index
  //     }
  //   })

  //   this.todo.splice(indexTask, 1)
  // }

}
