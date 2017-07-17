import React, { Component } from 'react';
import './index.css';

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.createNewTodo = this.createNewTodo.bind(this)
        this.toggleNewForm = this.toggleNewForm.bind(this)
    }

    handleChange(event){
        let newTodo = this.props.todo
        newTodo[event.target.name] = event.target.value
        this.props.handleChange(newTodo)
    }
    
    createNewTodo(){
        this.props.createNewTodo(this.props.todo)
    }

    toggleNewForm(){
        this.props.toggleNewForm(!this.props.newForm)
    }

  render() {
      let { todo } = this.props
      if(!this.props.newForm) {
        return (
            <div> 
                <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"  onClick={this.toggleNewForm}>
                    <i className="material-icons">add</i>
                </button>
            </div>
        )
      } else {
          return (
            <div className="mdl-card mdl-shadow--2dp todo-form">
                <h5 className="title">Add Todo</h5>
                <div className="mdl-card__supporting-text">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" name="title" value={todo.title} onChange={this.handleChange}/>
                        <label className="mdl-textfield__label">Title...</label>
                    </div>
                </div>
                <div className="mdl-card__supporting-text">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" name="description" value={todo.description} onChange={this.handleChange} />
                        <label className="mdl-textfield__label">Description...</label>
                    </div>
                </div>
                <div className="mdl-card__supporting-text action-btn">
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.createNewTodo}>
                        Create
                    </button>
                    &nbsp;
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.toggleNewForm}>
                        Cancel
                    </button>
                </div>
            </div>  
          )
      }
  }
}

export default TodoForm;
