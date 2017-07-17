import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import TodoSearch from './components/TodoSearch'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newForm: false,
      initialTodos: [],
      items: [],
      todo: {
        title: '',
        description: ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.createNewTodo = this.createNewTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.searchTodo = this.searchTodo.bind(this);
    this.toggleNewForm = this.toggleNewForm.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    
  }
  componentWillMount(){
    let todos = 
      [
        {
            id: 1,
            title: "title one",
            description: "description one",
            complete: true
        },
        {
            id: 2,
            title: "title two",
            description: "description two",
            complete: false
        }
      ] 
    this.setState({
      initialTodos: todos,
      items: todos
    })
  }

  handleChange(newTodo){
    this.setState({todo: newTodo});
  }

  createNewTodo(newTodo){
    newTodo.id = Date.now()
    const oldTodos = this.state.items
    const newTodos = oldTodos.concat([newTodo])
    this.setState({
      initialTodos: newTodos,
      items: newTodos,
      newForm: false
    })
    this.setState({
      todo: {
        title: '',
        description: ''
      }
    })
  }
  
  deleteTodo(todoId){
    const newItems = this.state.initialTodos.filter(function(item){
      if (item.id !== todoId){
        return true
      } 
    });
    this.setState({
      items: newItems
    })
  }

  searchTodo(keyword){
    const newItems = this.state.initialTodos.filter(function(item){
      return item.title.toLowerCase().search(keyword.toLowerCase()) !== -1;
    });
    this.setState({
      items: newItems
    })
  }

  toggleNewForm(bool){
    this.setState({ newForm: bool })
  }

  updateTodo(updateTodo){
    const copyState = this.state.initialTodos
    const indexForUpdate = copyState.findIndex((todo) => {
        return todo.id === updateTodo.id;
    });
    copyState[indexForUpdate] = updateTodo
    this.setState({
      initialTodos: copyState
    })    
  }

  render() {
    let { items, todo, newForm } = this.state;
    return (
      <div className="App">
        <TodoSearch
          searchTodo={this.searchTodo}
        />

        <TodoForm
          todo={todo}
          newForm={newForm}
          toggleNewForm={this.toggleNewForm}
          handleChange={this.handleChange}
          createNewTodo={this.createNewTodo}
        />
        
        <br/> 

        <TodoList
          todos={items}
          deleteTodo={this.deleteTodo}
          updateTodo={this.updateTodo}
        />

        <br/>
      </div>
    );
  }
}

export default App;