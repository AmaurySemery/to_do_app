import { Injectable, NotFoundException } from '@nestjs/common';
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

    update(id: string, todo: Todo) {
        // retrieve the todo to update
        const todoToUpdate = this.todos.find(t => t.id === +id);
        if(!todoToUpdate) {
            return new NotFoundException('booooo did you find this todo');
        }
        // apply to granulary update a single property
        if(todo.hasOwnProperty('done')) {
            // hasOwnProperty pour gérer les boléans
            todoToUpdate.done = todo.done;
        }
        if(todo.title) {
            todoToUpdate.title = todo.title;
        }
        if(todo.description) {
            todoToUpdate.description = todo.description;
        }
        // Pour chaque todo dans todos, on test si le todo est différent de l'id passée (le +id transforme l'id d'un string en number)
        const updatedTodos = this.todos.map(t => t.id !== +id ? t: todoToUpdate);
        this.todos = [...updatedTodos];
        return { updatedTodo: 1, todo: updatedTodos};
    }
}
