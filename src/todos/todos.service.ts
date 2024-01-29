import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {
    todos: Todo[] = [
    {
        id: 1,
        title: 'todos app',
        description: 'Create NestJS todos app',
        done: false,
    }
        ,
    {
        id: 2,
        title: 'bread',
        description: 'buy bread',
        done: true,
    }
    ];

    findAll(): Todo[] {
        return this.todos;
    }

    create(todo: Todo) {
        this.todos = [...this.todos, todo];
    }
}
