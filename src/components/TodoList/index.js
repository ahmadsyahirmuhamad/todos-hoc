import React, { Component } from 'react';
import Todo from '../Todo'
import TodoForm from '../TodoForm'
import './index.css';

class TodoList extends Component {
    constructor(props){
        super(props);
    }

  render() {
    let { todos, todo } = this.props
    let mapTodos = todos.map((todo) => {
      return(
        <div key={todo.id} >
          <Todo 
            todo={todo}
            updateTodo={this.props.updateTodo}
            {...this.props}
          />
          <br/ >
        </div>
      )
    })
    return (
      <div className="todo-lists">
          {mapTodos}
          <br/>
      </div>
    );
  }
}

export default TodoList;
