import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <p><Link to="/">Home</Link></p>
          <p><Link to="/rps">Rock Paper Scissors</Link></p>
          <p><Link to="/ttt">Tic Tac Toe</Link></p>

          {this.props.children}
        </p>
      </div>
    );
  }
}

export default App;
