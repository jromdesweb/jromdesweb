import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  task: string
  descr: string
  idtask: string
  todo = { }
  constructor(private _serviceTodo: TodoService, private rutaActiva: ActivatedRoute, private router: Router) {
    this.idtask = rutaActiva.snapshot.params.task
    
    console.log(this._serviceTodo.getOneTodo(this.idtask))
    this.task = this._serviceTodo.getOneTodo(this.idtask)["task"]
    this.descr = this._serviceTodo.getOneTodo(this.idtask)["descr"]
  }

  ngOnInit() {
  }

}
