import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TODOS } from 'src/app/model/mock-todos';
import { TodoService } from 'src/app/services/todo/todo.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(private todoService: TodoService/*, private messageService: MessageService*/){}

    todos: Todo[] = [];
    // selectedTodo?: Todo;

    // onSelect(todo: Todo): void {
    //   this.selectedTodo = todo;
    //   this.messageService.add('TodosComponent: Selected todo id=${todo.id}')
    // }

    getTodos(): void {
      this.todoService.getTodos()
        .subscribe(todos => this.todos = todos);
    }

    ngOnInit(): void {
      this.getTodos();
    }

}
