import React, { Component } from 'react';
import '../App.css';

export class TodoItem extends Component {

    completeTodo(id) {
        this.props.completeTodo(id);
    }

    deleteTodo(id) {
        this.props.deleteTodo(id);
    }

    redoTodo(id) {
        this.props.redoTodo(id);
    }

    actionButton() {
        if(this.props.completed === true) {
            return (
                <button class="actionButton" onClick={() => this.redoTodo(this.props.count)}>
                    Redo
                </button>
            )
        }
        else {
            return (
                <button class="actionButton" onClick={() => this.completeTodo(this.props.count)}>
                    Done
                </button>
            )
        }
    }

    render() {
        return (
            <>
            <div class="todo-item" value={this.props.completed}>
                <div class="todo-text" value={this.props.completed}>
                    {this.props.value}
                </div>
                { this.actionButton() }
                <button class="actionButton" onClick={() => this.deleteTodo(this.props.count)}>
                    Delete
                </button>
            </div>
            </>
        )
    }
}