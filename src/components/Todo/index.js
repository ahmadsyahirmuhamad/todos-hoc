import React, { Component } from 'react';
import './index.css';
import TodoUpdateForm from '../TodoUpdateForm'

class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {
      updateForm: false
    }
    this.deleteTodo = this.deleteTodo.bind(this)
    this.toggleUpdateForm = this.toggleUpdateForm.bind(this)
  }

  
  deleteTodo(todoId){
    this.props.deleteTodo(todoId)
  }
  
  toggleUpdateForm(){
    this.setState({
      updateForm: !this.state.updateForm
    })
  }

  render() {
    let { todo } = this.props
    if(this.state.updateForm) {
        return (
          <div>
            <TodoUpdateForm
            todo={todo}
            toggleUpdateForm={this.toggleUpdateForm}
            updateTodo={this.props.updateTodo}
            />
          </div>
        )
      } else {
        return(
          <div>
            <div className="demo-card-wide mdl-card mdl-shadow--2dp todo-card">
              <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">{ todo.title }</h2>
              </div>
              <div className="mdl-card__supporting-text">
                { todo.description }
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={this.toggleUpdateForm}>
                  Edit
                </a>
              </div>
              <div className="mdl-card__menu">
                <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" onClick={() => this.deleteTodo(todo.id)}>
                  <i className="material-icons">delete</i>
                </button>
              </div>
            </div>
          </div>
        )
      }
  }
}

export default Todo;

