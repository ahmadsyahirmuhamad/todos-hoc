import React, { Component } from 'react';
import './index.css';

class TodoSearch extends Component {
    constructor(props){
        super(props);
        this.searchTodo = this.searchTodo.bind(this)
    }

    searchTodo(event){
        this.props.searchTodo(event.target.value)
    }

  render() {
    return (
      <div className="todo-search">
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="text" name="description" onChange={this.searchTodo}/>
            <label className="mdl-textfield__label">Search...</label>
        </div>
          
      </div>
    );
  }
}

export default TodoSearch;
