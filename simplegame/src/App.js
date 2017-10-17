import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
import fire from './fire';


class App extends Component {
  
  constructor(props) {
    super(props);
  }
  
  componentWillMount(){

  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Free Game 3-Pack</h1>
        </header>
        <p className="App-intro">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/rps">Rock Paper Scissors</Link></p>
          <p><Link to="/ttt">Tic Tac Toe</Link></p>
          <p><Link to="/war">War</Link></p>
          {this.props.children}
        </p>
      </div>
    );
  }
}

export default App;
