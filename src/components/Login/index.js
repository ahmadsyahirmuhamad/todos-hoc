import React, { Component } from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props)
    
    this.handleLogin = this.handleLogin.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)

  }

  handleLogin(event){
    this.props.handleLogin(event)
  }

  handleOnChange(event){
    this.props.handleOnChange(event)
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleLogin}
        >
          <input 
            onChange={this.handleOnChange}
            type="text"
            value={this.props.userLogin.username}
            name="username"
            placeholder="Username"
          />
          <input 
            onChange={this.handleOnChange}
            type="text"
            value={this.props.userLogin.password}
            name="password"
            placeholder="Password"
          />
          <button>Submit</button>
        </form>
        {this.props.login ? <p> its true !!</p> : <p> either your password or usename is wrong </p>}      
      </div>
    )
  }
}
export default Login;



