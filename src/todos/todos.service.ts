import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './interfaces/dto/create-todo.tdo';

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

    findOne(id: string) {
        return this.todos.find(todo => todo.id === Number(id));
    }

    findAll(): Todo[] {
        return this.todos;
    }

    create(todo: CreateTodoDto) {
        this.todos = [...this.todos, todo as Todo];
    }
}
