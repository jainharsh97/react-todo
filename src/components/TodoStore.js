import React, { Component } from 'react';
import { cloneDeep } from 'lodash';
import { AddTodo } from './AddTodo';
import { TodoItem } from './TodoItem';

export class TodoStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : new Map(),
            count : 0
        };
        this.addTodo = this.addTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.redoTodo = this.redoTodo.bind(this);
    }

    renderTodoItem(value) {
        return (
            <>
            <TodoItem value={value.value} key={value.count} count={value.count} completed={value.completed} 
                completeTodo={this.completeTodo} deleteTodo={this.deleteTodo} redoTodo={this.redoTodo} /> 
            <br></br>  
            </>
        )
    }

    renderTodos() {
        let todos = Array.from(this.state.todos.values())
        const todoNode = todos.filter(e => e.completed === false).reverse().map(
            (value) => this.renderTodoItem(value)
        );
        return todoNode;
    }

    renderCompletedTodos() {
        let todos = Array.from(this.state.todos.values())
        const todoNode = todos.filter(e => e.completed === true).reverse().map(
            (value) => this.renderTodoItem(value)
        );
        return todoNode;
    }

    completeTodo(id) {
        let newTodos = cloneDeep(this.state.todos);
        let completedItem = newTodos.get(id);
        completedItem.completed = true;
        newTodos.set(id, completedItem);
        this.setState({
            todos: newTodos
        }, () => console.log(this.state.todos));
    }

    confirmDelete(id) {
        if(this.state.todos.get(id).completed === false) {
            if(window.confirm("You haven't completed this item! Are you sure?")) {
                return true;
            }            
            return false;
        }
        return true;
    }

    deleteTodo(id) {
        if(this.confirmDelete(id) === false) return;
        let newTodos = cloneDeep(this.state.todos);
        newTodos.delete(id);
        this.setState({
            todos: newTodos
        }, () => console.log(this.state.todos));
    }

    redoTodo(id) {
        let newTodos = cloneDeep(this.state.todos);
        let completedItem = newTodos.get(id);
        completedItem.completed = false;
        newTodos.set(id, completedItem);
        this.setState({
            todos: newTodos
        }, () => console.log(this.state.todos));
    }

    addTodo(todoValue) {
        let newTodos = cloneDeep(this.state.todos);
        let newCount = this.state.count;
        let todoItem = {
            value: todoValue,
            count: newCount,
            completed: false
        };
        newTodos.set(newCount, todoItem);
        this.setState({
            todos: newTodos,
            count: newCount+1
        }, () => console.log(this.state.todos));
    }

    render() {
        return (
            <>
            <div id="todo-screen">
                <h2>To-Do</h2>
            </div>
            <br></br>
            < AddTodo addTodo={this.addTodo} />
            <br></br>
            { this.renderTodos() }
            { this.renderCompletedTodos() }
            </>
        );
    }
}