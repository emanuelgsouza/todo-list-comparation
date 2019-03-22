import React, { Component } from 'react';
import logo from './logo.svg';
import TodoApp from './components/TodoApp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="columns is-multiline is-centered">
        <div className="App-header column is-12 has-text-centered">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div class="column is-12 has-text-centered">
          <h1 class="title"> Todo list de exemplo em React </h1>
        </div>

        <div class="column is-half">
          <TodoApp />
        </div>
      </div>
    );
  }
}

export default App
