import React, { Component } from 'react';

class TodoUpdateForm extends Component {
  constructor(props){
    super(props)
    this.state = {
        todo: {
            id: '',
            title: '',
            description: '',
            complete: ''
        }
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateTodo = this.updateTodo.bind(this)
  }

  componentWillMount(){
      this.setState({
          todo: {
            id: this.props.todo.id,
            title: this.props.todo.title,
            description: this.props.todo.description,
            complete: this.props.todo.complete,
          }
      })
  }

    handleChange(event){
        let newTodo = this.state.todo
        newTodo[event.target.name] = event.target.value
        this.setState({todo: newTodo});
    }

    updateTodo(){
        this.props.updateTodo(this.state.todo)
        this.props.toggleUpdateForm()
    }
    render() {
        let { todo } = this.state
        return(
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                <div className="mdl-card__supporting-text">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" name="title" value={todo.title} onChange={this.handleChange} />
                        <label className="mdl-textfield__label">Title...</label>
                    </div>
                </div>
                <div className="mdl-card__supporting-text">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" name="description" value={todo.description} onChange={this.handleChange} />
                        <label className="mdl-textfield__label">Description...</label>
                    </div>
                </div>
              <div className="mdl-card__actions mdl-card--border">
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.updateTodo}>
                    Update
                </button>
              </div>
            </div>
        )
    }
}

export default TodoUpdateForm;