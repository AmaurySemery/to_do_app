import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './interfaces/dto/create-todo.tdo';

// localhost:3000/todos
@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    // localhost:3000/todos/2
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.todosService.findOne(id);
    }

    @Get()
    findAll(): Todo[] {
        return this.todosService.findAll();
    }

    @Post()
    createTodo(@Body() newTodo: CreateTodoDto) {
        this.todosService.create(newTodo);
    }
}
