import React, { Component } from 'react';
import '../App.css';

export class AddTodo extends Component {

    addTodo(props) {
        let todoItemValue = document.getElementById("input-todo").value;
        if(todoItemValue.length === 0) return;
        this.props.addTodo(todoItemValue);
        document.getElementById("input-todo").value = "";
    }

    render() { 
        return (
            <div id="add-todo">
                <input type="text" name="item" placeholder="Add New ToDo" id="input-todo"></input>
                <button id="submit" onClick={() => this.addTodo()}>Submit</button>
            </div>
        )
    }
}