import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TodoService} from './../service/todo.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  @Input() task:string;
  @Input() descr:string;
  @Output () evenDelete = new EventEmitter()
  
  constructor(private _serviTodoSer:TodoService) { }

  ngOnInit() {
  }

  delete(){
    // this.evenDelete.emit(this.task)
    this._serviTodoSer.deleteTask(this.task)
  }

}
