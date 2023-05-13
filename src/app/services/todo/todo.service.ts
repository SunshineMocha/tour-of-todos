import { Injectable } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TODOS } from 'src/app/model/mock-todos';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseURL = 'https://643694108205915d34f74640.mockapi.io/todos';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    // const todos = of(TODOS);
    // this.messageService.add('TodoService: fetched todos')
    // return todos;

    return this.http.get<Todo[]>(this.baseURL).pipe(
      tap(_ => this.messageService.add('fetched heroes')),
      catchError((error)=> of([]))
      )
  }

  getTodo(id: number): Observable<Todo> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    // const todo = TODOS.find(h => h.id === id)!;
    // this.messageService.add(`TodoService: fetched todo id=${id}`);
    // return of(todo);

    const todoURL = this.baseURL + "/" + id;
    return this.http.get<Todo>(todoURL);

  }

  updateTodo(todo: Todo, id: number): Observable<any> {
    const putURL = this.baseURL + "/" + id;
    return this.http.put(putURL, todo, this.httpOptions);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

}
