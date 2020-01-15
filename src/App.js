import React, { Component } from 'react';
import './App.css';
import { TodoItem } from './components/TodoItem';
import { TodoStore } from './components/TodoStore';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      < TodoStore />
    )
  }
}